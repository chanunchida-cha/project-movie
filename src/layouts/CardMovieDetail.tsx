import React, { ReactElement, useState } from "react";

interface Props {
  image: string;
  movieName: string;
  hidden?: boolean;
}

function CardMovieDetail({ image, movieName }: Props) {
  const [modal, setModal] = useState<boolean>(false)
  return (
    <div>
      <div className=" rounded-3xl overflow-hidden  w-full lg:w-4/6 md:w-4/6  mx-3 md:mx-0 lg:mx-0">
        <img
          className="w-full bg-cover"
          src={`/assets/images/${image}`}
          onClick={() => {
            setModal(true)
          }}
        />
      </div>
    </div>
  );
}

export default CardMovieDetail;
