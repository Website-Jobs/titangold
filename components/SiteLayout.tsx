import React from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import ScrollTop from "./ScrollTop";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Head from "next/head";

interface LayoutProps {
  children?: React.ReactNode;
}

function SiteLayout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Titan Gold LLC</title>
      </Head>
      <SiteHeader />
      <ToastContainer />
      {children}
      <SiteFooter />
      <ScrollTop />
    </>
  );
}

export default SiteLayout;
