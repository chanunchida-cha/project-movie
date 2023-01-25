import Banner from "@/ui/Banner";
import Navbar from "@/ui/Navbar";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";

type Props = {};

const Header = (props: Props) => {
  const route = useRouter();
  console.log(route);
  const hiddenBanner = route.pathname.startsWith("/movie");

  return (
    <>
      <Navbar />
      {!hiddenBanner && <Banner />}
    </>
  );
};

export default Header;
