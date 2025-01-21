import { CircleX, Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./MyCart.module.css";
import Link from "next/link";
import { useCart } from "@/Contexts/CartContext";
import { useAuth } from "@/Contexts/AuthContext";
import LoginConfirmationModel from "../models/LoginConfirmationModel";
import { useRouter } from "next/navigation";

function MyCart({ isVisible }: { isVisible: boolean }) {
  const [show, setShow] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const handleShow = () => setShow(!show);
  const { cartItems, showCart, handleShowCart, clearCart } = useCart();

  const handleClose = () => {
    setShow(false);
    handleShowCart(false);
  };

  function handleCheckoutClick() {
    if (isAuthenticated) {
      handleShowCart(false);
      setShow(false);
      router.push("/checkout");
    } else {
      setShowModel(true);
    }
  }
  return (
    <>
      <button
        className="myButtonUnColored myButton px-3 position-relative d-flex justify-content-center"
        onClick={handleShow}
      >
        <Image
          src={"/images/cartIcon.svg"}
          height={25}
          width={25}
          alt="cart"
          loading="eager"
          className=""
          priority
        />
        {cartItems && (
          <span className={`${styles.cartQuantity} font14`}>1</span>
        )}
      </button>

      <Offcanvas
        show={(show && isVisible) || (showCart && isVisible)}
        onHide={handleClose}
        placement="end"
        className={` ${styles.customOffcanvas}`}
        backdropClassName={styles.customBackdrop}
      >
        {/* header */}
        {cartItems ? (
          <>
            <p
              className={`${styles.cartHeader} py-3 font18 fontWeight600 text-center position-relative`}
            >
              Shopping Cart
              <span className="me-3 position-absolute end-0">
                <CircleX
                  size={24}
                  style={{ cursor: "pointer" }}
                  onClick={handleClose}
                />
              </span>
            </p>

            <div className="d-flex flex-column justify-content-between h-100">
              {/* detail */}
              <div
                style={{ background: "#F8F6F0" }}
                className="d-flex justify-content-between align-items-center px-3 d-flex mt-4 gap-3"
              >
                <div className="p-2" style={{ background: "white" }}>
                  <Image
                    src={"/images/siteLogo.png"}
                    height={81}
                    width={91}
                    alt="Phonico logo"
                  />
                </div>

                <div className="d-flex flex-column  gap-2">
                  <p className="font30 fontWeight600">
                    {cartItems.data_usable}
                    {cartItems.unit}
                  </p>
                  <p className="font12 textMuted">eSIM/Unlimited / 1-month</p>
                </div>

                <div className="d-flex flex-column align-items-end gap-2">
                  <p className="font24 fontWeight600">${cartItems.price}</p>
                  <span>
                    <Trash2 color="#C00004" onClick={clearCart} />
                  </span>
                </div>
              </div>

              {/* summary */}
              <div
                style={{ backgroundColor: "#F8F6F0" }}
                className={`${styles.cartSummary} px-4 py-3 mx-3 d-flex flex-column gap-3`}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <p className="font18 fontWeight600">Subtotal</p>
                  <p className="font18 fontWeight600">
                    ${cartItems.price.toFixed(2)}
                  </p>
                </div>
                <button
                  // href={"/checkout"}
                  className="myButton myButtonColored mx-4"
                  // onClick={handleClose}
                  onClick={handleCheckoutClick}
                >
                  Checkout
                </button>
              </div>
            </div>

            <div className="d-flex justify-content-center align-items-center gap-5 my-2 mx-4">
              <p className="font12 d-flex align-items-center gap-2">
                <span>
                  <Image
                    src={"/images/clipboard.svg"}
                    height={16}
                    width={16}
                    alt="check icon"
                  />
                </span>
                <span>No Contract Required</span>
              </p>
              <p className="font12 d-flex align-items-center gap-2">
                <span>
                  <Image
                    src={"/images/crossClipboard.svg"}
                    height={16}
                    width={16}
                    alt="check icon"
                  />
                </span>
                <span>Cancel Anytime</span>
              </p>
            </div>
            <LoginConfirmationModel
              showModel={showModel}
              setShowModel={setShowModel}
              setShow={setShow}
            />
          </>
        ) : (
          <div className="h-100 d-flex flex-column gap-3 align-items-center justify-content-center">
            <Image
              src={"/images/emptyCart.svg"}
              width={172}
              height={183}
              alt="empty cart"
            />
            <p className="fontWeight600 font18 textSecondary">
              Your cart is empty
            </p>
            <p className="font12 textMuted">
              Add something to make me happy :{")"}
            </p>
            <Link
              href={"/plans"}
              className="myButton myButtonColored"
              onClick={handleClose}
            >
              Go to our shop
            </Link>
          </div>
        )}
      </Offcanvas>
    </>
  );
}

export default MyCart;
