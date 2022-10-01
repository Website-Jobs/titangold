import React from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import ScrollTop from "./ScrollTop";

interface LayoutProps {
  children?: React.ReactNode;
}

function SiteLayout({ children }: LayoutProps) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
      <ScrollTop />
    </>
  );
}

export default SiteLayout;
