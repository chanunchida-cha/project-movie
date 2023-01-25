import { movieStore } from "@/store/movieStore";
import Navbar from "@/ui/Navbar";
import Image from "next/image";
import React, { useEffect } from "react";
import Swiper from "swiper";

const Home = () => {
  useEffect(() => {
    const getMovie = async () => {
      await movieStore.getMovie();
    };
    getMovie();
  }, []);

  return <div className=""></div>;
};

export default Home;
