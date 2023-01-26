import React, { ReactElement } from "react";

interface Props {
    image: string;
    movieName: string;
}

function CardMovie({ image, movieName }: Props) {
    return (
        
        <div className="cardMovie-container w-96 mx-auto">
            <div className="cardMovie-img">
                 <img className="rounded-lg" src={`/assets/images/${image}`} />
            </div>
            <p className="text-center text-white font-normal text-xl pt-6">
                   {movieName}
            </p>
        </div>
        

    );
}

export default CardMovie;
