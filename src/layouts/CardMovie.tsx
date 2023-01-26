import React, { ReactElement } from "react";

interface Props {
    image: string;
    movieName: string;
}

function CardMovie({ image, movieName }: Props) {
    return (
        
        <div className="cardMovie-container w-96 mx-auto">
            <div className="cardMovie-img">
                 <img className="rounded-t-3xl" src={`/assets/images/${image}`} />
            </div>
            <p className="text-left text-white font-normal text-[2rem] pt-6
           ">
                   {movieName}
            </p>
        </div>
        

    );
}

export default CardMovie;
