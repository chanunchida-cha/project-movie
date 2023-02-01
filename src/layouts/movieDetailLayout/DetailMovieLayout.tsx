import ModalImage from "@/components/MovieDetail/ModalImage";
import React, { ReactElement, useState } from "react";
import CardMovie from "../CardMovie";
import CardMovieDetail from "./CardMovieDetail";

interface Props {
  image: string;
  movieName: string;
  movieDetail: string;
  video: string;
  hidden?: boolean;
}

function DetailMovieLayout({
  image,
  movieName,
  movieDetail,
  video,

}: Props) {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <div className="border-b border-borderColor pb-24">
      <div className="text-2xl">{movieName}</div>
      <div className="grid grid-cols-7 mt-10">
        <div
          className="col-span-2"
          onClick={() => {
            setModal(true);
          }}
        >
          <CardMovieDetail image={image} movieName={movieName} />
        </div>
        <div className="col-span-5  rounded-3xl">
          <iframe
            width="100%"
            height="100%"
            src={video}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
      <div className="mt-12  text-2xl">เนื้อเรื่องย่อ</div>
      <div className="mt-12 bg-content  rounded-3xl p-10 px-28 text-xl indent-10 leading-loose">
        {movieDetail}
      </div>
      {modal && <ModalImage hidden={true} image={image} movieName={movieName} video={video} setModal={setModal} />}
    </div>
  );
}

export default DetailMovieLayout;
