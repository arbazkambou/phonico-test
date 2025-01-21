import { AuthProvider } from "@/Contexts/AuthContext";
import PlanCartProvider from "@/Contexts/CartContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/footer";
import getMetaData from "@/helpers/metadata";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import "./globals.css";
// import TawkScript from "@/components/helpers/TawkScript";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

config.autoAddCss = false;
export const metadata: Metadata = getMetaData({
  title: "Phonico: Prepaid eSIM USA | eSIM Plans with Free Calls &amp; Texts",
  description:
    "Phonico eSIM USA: Where Calls and Texts are Free with Data Plans. Your Top Choice for USA Travel | Fast and Affordable Wireless Network Service Nationwide.",
  keywords:
    "phonico, phonico mobile, gsm pink, Sim Cards, Data Plans, M2M, IOT Devices, cheap plans, sim home delivery",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <AuthProvider>
          <PlanCartProvider>
            <ReactQueryProvider>
              <NextTopLoader showSpinner={false} color="#fa577d" zIndex={110} />
              <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                  duration: 5000,
                }}
                containerStyle={{ zIndex: "20000" }}
              />
              <Navbar />
              {children}
              <Footer />
            </ReactQueryProvider>
          </PlanCartProvider>
        </AuthProvider>
        {/* <TawkScript /> */}
      </body>
      <GoogleAnalytics gaId="G-BN96MB32S3" />
    </html>
  );
}
