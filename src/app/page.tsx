import EsimSteps from "@/components/landing/EsimSteps";
import ClientReviews from "@/components/shared/ClientReviews";
import EsimBenefitis from "@/components/shared/EsimBenefitis";
import EsimBenifitsBar from "@/components/shared/EsimBenifitsBar";
import EsimFeaturesCard from "@/components/shared/EsimFeaturesCard";
import EsimInstall from "@/components/shared/EsimInstall";
import Faqs from "@/components/shared/Faqs";
import HeroSection from "@/components/shared/HeroSection";
import PlansSection from "@/components/shared/PlansSection";
import SearchNetworkCoverage from "@/components/shared/SearchNetworkCoverage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phonico: Prepaid eSIM USA | eSIM Plans with Free Calls & Texts",
  description:
    "Phonico eSIM USA: Where Calls and Texts are Free with Data Plans. Your Top Choice for USA Travel | Fast and Affordable Wireless Network Service Nationwide.",
};

export const revalidate = 300;

export default function Home() {
  const heroData = {
    underlineText: "Phonico - Your Gateway to USA Connectivity",
    title: (
      <>
        With <span className="textAccent">Phonico</span> eSIM, You Can Stay
        Connected Across the USA and Beyond!
      </>
    ),
    description:
      "Find the best USA eSIM plans with affordable and reliable data. Perfect for travellers and residents for seamless connectivity within the US. Also Offer Roaming Services in Canada and Mexico!",
    btn: {
      title: "Find your Plan",
      href: "/plans",
    },
    imgSrc: "/images/femaleHero.png",
  };

  const benefitsData = {
    title: (
      <>
        {" "}
        Why Choose <br /> <span className="primaryColor">PHONICO</span> eSIM?
      </>
    ),

    description: (
      <>
        {" "}
        We offer the best eSIM plans tailored for US Citizens and Travelers.
        With these plans, you can enjoy high-speed Internet, calls, and text
        messages without the hassle of changing SIM cards. <br />
        Any plans to visit Canada or Mexico? We have got you covered by our eSIM
        roaming while travelling between the USA, Canada, and Mexico. No more
        surprise bills, just smooth, continuous service. We promote flexibility,
        whether it&apos;s a business trip or a vocation. USA eSIM Plans that fit
        your lifestyle with data only, calls, SMS, and unlimited data options.
        With Phonico eSIM, Instant Connectivity is just a tap away!
      </>
    ),
    imgSrc: "/images/benefitsImg1.png",
  };

  const eSimInstallData = {
    title: (
      <>
        Introducing a World of Connectivity with the{" "}
        <span className="textAccent">Phonico</span> eSIM App
      </>
    ),

    description: (
      <>
        Download our eSIM App for monitoring your real-time data usage. You can
        also use this app to activate your eSIM, manage profiles, and get
        updates on new features and promotions. You can find this app on the
        Play Store and Apple Store!
      </>
    ),

    imgSrc: "/images/mobileImg.png",
  };

  const accordionData = [
    {
      eventKey: "0",
      question: "What is an eSIM?",
      body: "eSIM, or Embedded SIM, is a virtual SIM card that is not physically present in your phone. Unlike traditional physical SIM cards, you can activate digital cellular plans on eSIMs without swapping cards. eSIM is popular among travellers who need to connect to different destinations without changing their SIM cards. With Phonico eSIM, you will get seamless connectivity across the US and roaming services in Mexico and Canada.",
    },
    {
      eventKey: "1",
      question: "How Does eSIM Work?",
      body: `eSIM is a digital SIM that acts like a regular SIM. It is installed and activated into your phones digitally and allows you to connect with different networks during your travel. You can buy Phonico eSIM plans with a simple QR code or App activation and enjoy seamless connectivity across the US with roaming in Mexico and Canada.`,
    },
    {
      eventKey: "2",
      question: "How to activate Phonico eSIM?",
      body: `Phonico offers a hassle-free activation method for eSIM. After buying your suitable plan, you will receive a QR code to scan and activate your eSIM. Other means are using the Phonico eSIM App to activate. Phonico promotes flexibility and convenience to its users whether they are at home or travelling. `,
    },
    {
      eventKey: "3",
      question: "How to Check if eSIM is activated on iPhone?",
      body: `By following these steps, you can check if your eSIM is activated on your iPhone:`,
      listItems: [
        "Tap Settings on your iPhone",
        "Tap Cellular",
        "You will see the eSIM profile under this option if activated",
        "If not activated, you will see the “activate eSIM through QR code” option or Activate by App option.",
      ],
    },
    {
      eventKey: "4",
      question: "How to set up an eSIM?",
      body: "It is the most convenient way to set up your eSIM. It's too easy for anyone to activate their eSIM on their own. What you need to do is:",
      listItems: [
        "Choose your plan that fulfils your requirements, whether it's for USA travel, prepaid eSIM USA, or roaming for Canada and Mexico",
        "Buy your eSIM from Phonico because they offer a secure transaction platform",
        "After that, activate your eSIM by scanning the QR code received on your e-mail or by using the Phonico eSIM App.",
        "That’s it! You have your eSIM activated and get connected to the strongest network in your zone. Enjoy your data, calls, and texting across the USA and beyond.",
      ],
    },
  ];
  return (
    <>
      <HeroSection heroData={heroData} />
      <EsimFeaturesCard page="home" />
      <PlansSection />
      <SearchNetworkCoverage />
      <EsimSteps />
      <EsimBenefitis data={benefitsData} />
      <EsimBenifitsBar />
      <EsimInstall data={eSimInstallData} />
      <ClientReviews />
      <Faqs data={accordionData} />
    </>
  );
}
