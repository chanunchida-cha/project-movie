import Link from "next/link";
import React, { ReactElement } from "react";

interface Props {
    image: string;
    movieName: string;
    category:string
}

function CardMovie({ image, movieName,category }: Props) {
    return (
        
        <div className="cardMovie-container w-96 mx-auto">
            <div className="cardMovie-img">
                <Link href={`/movie/${category}/${movieName}`}>
                    <img className="rounded-t-3xl" src={`/assets/images/${image}`} />
                </Link>
            </div>
            <p className="text-left text-white font-normal text-[2rem] pt-6
           ">
                   {movieName}
            </p>
        </div>
        

    );
}

export default CardMovie;
