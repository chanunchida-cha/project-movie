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
            <div className="cardMovie-img w-[17rem] mx-auto">
                <Link href={`/movie/${category}/${movieName}`}>
                    <img className="rounded-t-3xl mmx" src={`/assets/images/${image}`} />
                    <p className="text-left text-white font-normal text-[1.5rem] pt-6
           inside">
                   {movieName}
            </p>
                </Link>
            </div>
            
            
        </div>
        

    );
}

export default CardMovie;
