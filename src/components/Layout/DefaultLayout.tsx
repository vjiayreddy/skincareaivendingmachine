import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";

interface DefaultLayoutProps {
  children: React.ReactNode;
}
const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="min-h-dvh">{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
