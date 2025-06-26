import React from "react";
import Footer from "../Footer";
import NavigationBar from "../NavBar/NavBarComponent";

interface DefaultLayoutProps {
  children: React.ReactNode;
}
const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      {/* <NavBar /> */}
      <NavigationBar />
      <main className="min-h-dvh">{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
