import { DesActor, KnownFor } from "@/models/interface/InterfaceActor";
import { DesDirector } from "@/models/interface/InterfaceDirector";
import React, { ReactElement } from "react";
import CardMovieDetail from "./CardMovieDetail";

interface Props {
  title: string;
  name: string;
  image: string;
  history: DesDirector | DesActor;
  knownFor: KnownFor[];
}

function DetailStaffLayout({ title, name, image, history, knownFor }: Props) {
  const historytitle = Object.keys(history);
  
  

  return (
    <div className="border-b border-[#707070] pb-24">
      <div className="text-2xl">{title}</div>
      <div className="text-2xl mt-12">{name}</div>
      <div className="grid grid-cols-7 mt-10">
        <div className="col-span-2">
            
          <CardMovieDetail image={image} movieName={name} />
        </div>
        <div className="col-span-5 p-5 rounded-3xl bg-[#26292E]">
          <div className=" text-xl ">ประวัติโดยย่อ</div>
          {historytitle.map((title,index) => {
            return (
              <div key={index}>
                <div className="text-xl pl-5 leading-loose">
                  {title} : {history[title]}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-2xl mt-12">ผลงานแนะนำ</div>
      <div className="grid grid-cols-4 mt-12">
        {knownFor.map((info,index) => {
          return (
            <div key={index}>
              <CardMovieDetail
                image={info.img}
                movieName={info.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DetailStaffLayout;
