import React, { ReactElement } from "react";

interface Props {
  image: string;
  movieName: string;
}

function CardMovie({ image, movieName }: Props) {
  return (
    <div>
      <div className=" rounded-3xl overflow-hidden  w-full lg:w-1/6 md:w-6/12  mx-3 md:mx-0 lg:mx-0">
        <img className="w-full bg-cover" src={image} />
        <div className="px-3 pb-2">
          <div className="pt-2">
            <i className="far fa-heart cursor-pointer" />
            <span className="text-2xl text-white font-normal">
              {movieName}
            </span>
          </div>
          <div className="pt-1">
            <div className="mb-2 text-sm"></div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

export default CardMovie;
