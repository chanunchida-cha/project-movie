import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import CardMovieDetail from "@/layouts/CardMovieDetail";

interface Props {
  hidden: boolean;
  image: string;
  movieName?: string;
  video?: string;
  setModal: (value: boolean) => void;
}

function ModalImage({ hidden, image, movieName, video, setModal }: Props) {
  return (
    <div className="fixed z-20 inset-0 overflow-y-hidden bg-black bg-opacity-80  transition-opacity  my-auto">
      <div className="grid grid-cols-12 grid-rows-6 h-full ">
        <div className="col-span-10 col-start-2 row-span-6 row-start-1     ">
          <div className="grid grid-cols-12 h-full p-2 grid-rows-6">
            <div className="col-start-12 flex justify-center row-span-1 mt-5">
              <span
                className="row-start-3 font-bold flex justify-end   "
                onClick={() => {
                  setModal(false);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-10 h-10 text-white    rounded-full text-accent m-2 sm:m-2 md:2 lg:m-3 xl:m-3 2xl:m-5 z-50 "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </div>
            <div className="row-span-5 col-span-12  h-full pb-36">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper z-50 flex "
              >
                <SwiperSlide>
                  <img src={`/assets/images/${image}`} />
                </SwiperSlide>
                {!hidden && (
                  <SwiperSlide>
                    {" "}
                    <iframe
                      width="60%"
                      height="100%"
                      src={video}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                  </SwiperSlide>
                )}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalImage;
