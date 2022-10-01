import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}
function DashboardLayout({ children }: LayoutProps) {
  return <>{children}</>;
}

export default DashboardLayout;
