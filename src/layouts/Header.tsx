import Banner from "@/ui/Banner";
import Navbar from "@/ui/Navbar";
import React, { ReactNode } from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <Navbar />
      <Banner />
    </>
  );
};

export default Header;
