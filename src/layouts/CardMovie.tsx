import Link from "next/link";
import React, { ReactElement } from "react";

interface Props {
    image: string;
    movieName: string;
    category:string
}

function CardMovie({ image, movieName,category }: Props) {
    return (

        <div className="cardMovie-container w-96 mx-auto ">
            <div className="cardMovie-img w-[3rem] 2xl:w-[15rem] xl:w-[12rem] lg:w-[9rem] md:w-[7rem] sm:w-[6.5rem]">
                <Link href={`/movie/${category}/${movieName}`}>
                    <img className="rounded-t-3xl mmx" src={`/assets/images/${image}`} />
                    <p className="text-left text-white font-normal pt-6
                    text-[0.6rem] md:text-[1rem] 2xl:text-[1.5rem]
           inside">
                   {movieName}
            </p>
                </Link>
            </div>

        </div>

    );
}

export default CardMovie;
