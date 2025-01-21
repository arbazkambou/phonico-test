"use client";

import styles from "@/components/pages/CheckoutPage.module.css";
import { useCart } from "@/Contexts/CartContext";
import { getCheckoutSummary, processCheckout } from "@/lib/CheckoutApis";
import { useMutation, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { GridLoader } from "react-spinners";
import Faqs from "../shared/Faqs";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import FormError from "../helpers/FormError";

interface Inputs {
  zipcode: string;
  imei: string;
}

function CheckoutPage() {
  const { cartItems, clearCart, isCartLoading } = useCart();
  const router = useRouter();
  const accordionData = [
    {
      eventKey: "0",
      question: "Are these Plans Valid outside the USA?",
      body: "Phonico coverage focuses on eSIM prepaid plans for the USA only. However, You will have a roaming option for Mexico and Canada. See our coverage details here.",
    },
    {
      eventKey: "1",
      question: "What happens if I Run Out of Data?",
      body: `Mostly, eSIM providers start charging whenever you surpass data limits. Phonico understands the extra burden on your pockets and doesn't charge a cent for over-usage. You can stay connected to the carrier network because of unlimited talk & text. For data usage monitoring, Download the Phonico App and update your plans as per your need.`,
    },
    {
      eventKey: "2",
      question: "How do I activate my eSIM plan?",
      body: `Phonico offers the best eSIM plans and a simple activation process. After you purchase the suitable ESIM plan, you will receive a QR code in your email. Scan the code with your cellphone camera or activate your eSIM from the Phonico App. That’s it. Enjoy your connectivity.`,
    },
    {
      eventKey: "3",
      question: "Can I share my eSIM data with other devices?",
      body: `The one feature you can count on is to share your Phonico eSIM data via hotspot for every type of package plan you buy. Connect your devices or share data with your family or colleagues.`,
    },
    {
      eventKey: "4",
      question: "Can I Upgrade or Change my plan after purchasing?",
      body: "Yes, Phonico offers upgrade or change-of-plan options after purchasing any plan. You can use the Phonico app to upgrade to a higher-volume plan or change it.",
    },
    {
      eventKey: "5",
      question: "Is Customer Support available if I face any issues?",
      body: "Yes, you will have 24/7 customer support online. You can ask questions or discuss your issue by tapping the support option in the Phonico app.",
    },
    {
      eventKey: "6",
      question: "Do I need a Local number to use these plans?",
      body: "No, every Phonico eSIM plan includes a US-based number. Thus, you can make calls, send texts, and stay connected without needing a local number.",
    },
    {
      eventKey: "6",
      question: "Are there any hidden charges with these plans?",
      body: "No, there are no hidden charges. All the plans are straightforward, and you only have to pay for the plan you are purchasing.",
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["summary"],
    queryFn: () => getCheckoutSummary(cartItems?.id),
    staleTime: 0,
    enabled: !!cartItems?.id,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: processCheckout,
    onSuccess: (response) => {
      if (response.open_checkout) {
        if (typeof window !== undefined) {
          window.location.href = response.stripe_checkout_url;
        }
      } else {
        clearCart();
        toast.success("Plan has been purchased successfully!");
        router.push("/plans");
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  useEffect(
    function () {
      if (isCartLoading) return;
      if (!cartItems) {
        router.push("/plans");
      }
    },
    [cartItems, isCartLoading, router]
  );

  if (isLoading || isCartLoading || !cartItems)
    return (
      <div
        className={`${styles.spinnerContainer} d-flex justify-content-center align-items-center`}
      >
        <GridLoader color="#ee5e7f" />
      </div>
    );

  if (!isLoading && isError) {
    throw new Error(error?.message);
  }

  async function onSubmit(formData: Inputs) {
    let activation_plan_id = "";

    const { imei, zipcode } = formData;

    let redirect_url = "";
    if (typeof window !== undefined) {
      redirect_url = `${window.location.origin}/order-history`;
    }

    if (cartItems?.id) {
      activation_plan_id = cartItems.id;
    }

    mutate({
      redirect_url,
      imei,
      zipcode,
      activation_plan_id,
    });
  }

  function formatPrice(price: number | undefined) {
    price = Number(price);
    if (price !== undefined) return Math.round(Number(price.toFixed(2)));
  }
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          {/* Checkout detail form */}
          <Col lg={8} className={`${styles.checkoutForm}`}>
            <form
              className="py-5 px-2 m-0 d-flex flex-column  gap-4 mx-2 mx-md-0"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="d-flex justify-content-between align-items-center">
                <div
                  className={`${styles.logoContainer} d-flex justify-content-center align-items-center`}
                >
                  <Image
                    src={"/images/siteLogo.png"}
                    height={91}
                    width={100}
                    alt="Phonico logo"
                  />
                </div>
                <div>
                  <p className="font40 fontWeight600">
                    {cartItems.data_usable}
                    {cartItems.unit}
                  </p>
                  <p className="font14 textMuted">eSIM/ Unlimited /1-month</p>
                </div>
                <p className="font24 fontWeight600">
                  ${formatPrice(cartItems?.price)}
                </p>
              </div>

              <div
                className={`${styles.autoRenew} p-3 d-flex flex-column flex-sm-row justify-content-between align-sm-items-center`}
              >
                <p className="font24 fontWeight500">Plan Auto renew</p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="font14 textMuted">
                    Your plan renews automatically
                  </p>
                  {/* <ToggleSwitch /> */}
                </div>
              </div>
              <div>
                <input
                  className="myInput myInputWhite w-100"
                  placeholder="Enter 15-digit IMEI"
                  disabled={isPending}
                  {...register("imei", {
                    required: "IMEI number is required",
                    pattern: {
                      value: /^[0-9]{15}$/,
                      message:
                        "Invalid IMEI. Please enter a 15-digit numeric value.",
                    },
                  })}
                />
                {errors?.imei && <FormError message={errors.imei.message} />}
              </div>

              <div>
                <input
                  className="myInput myInputWhite w-100"
                  placeholder="Enter 5-digit ZIP Code"
                  disabled={isPending}
                  {...register("zipcode", {
                    required: "Zip code is required",
                    pattern: {
                      value: /^\d{5}$/,
                      message:
                        "Invalid Zip Code. Please enter a 5-digit number.",
                    },
                  })}
                />
                {errors?.zipcode && (
                  <FormError message={errors.zipcode.message} />
                )}
              </div>

              {/* <div className="d-flex align-items-center gap-4">
                <input
                  className="myInput myInputWhite w-100"
                  placeholder="Discount code"
                />
                <button className="myButton myButtonColored fontWeight500 px-5">
                  Apply
                </button>
              </div> */}

              <div
                className={`${styles.cartSummary} py-3 px-4 d-flex flex-column justify-content-center gap-4`}
              >
                <div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="font18 fontWeight500">Discount</p>
                    <p className="font18 fontWeight500">${formatPrice(0)}</p>
                  </div>
                  <hr />
                </div>
                {/* <div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="font18 fontWeight500">Amount from wallet</p>
                    <p className="font18 fontWeight500">
                      ${formatPrice(data?.amount_deducted_from_wallet)}
                    </p>
                  </div>
                  <hr />
                </div>
                <div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="font18 fontWeight500">Amount from card</p>
                    <p className="font18 fontWeight500">
                      ${formatPrice(data?.amount_deducted_from_card)}
                    </p>
                  </div>
                  <hr />
                </div> */}
                <div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="font18 fontWeight500">Subtotal</p>
                    <p className="font18 fontWeight500">
                      ${formatPrice(data?.total_amount)}
                    </p>
                  </div>
                  <hr />
                </div>
                {/* <div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="font18 fontWeight500">Renews at</p>
                      <p className="font18 fontWeight500">
                        $35/mo ($105 for 3 months)
                      </p>
                    </div>
                    <hr />
                  </div> */}
              </div>

              <button
                className="myButton myButtonHollow  mx-2"
                type="submit"
                disabled={isPending}
              >
                {isPending ? "Processing..." : "Pay now"}
              </button>
            </form>
          </Col>
          {/* Contact checkout form */}
        </Row>
      </Container>
      <Faqs data={accordionData} />
    </>
  );
}

export default CheckoutPage;
