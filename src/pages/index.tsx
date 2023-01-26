import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Home from "@/components/Home";
import CardMovie from "@/layouts/CardMovie";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { movieStore } from "@/store/movieStore";
import { Movie, MovieDetail } from "@/models/interface/InterFaceMovie";

const Index = observer(() => {
    useEffect(() => {
        const getMovie = async () => {
            await movieStore.getMovie();
        };
        getMovie();
    }, []);
    return (
        <div className="w-2/3 mx-auto ">
            {movieStore.movies.map((movie: Movie) => {
                return (
                    <div className="category">
                        <div className="grid-movie grid grid-cols-4 gap-4 gap-y-20">
                            <p className="text-white font-normal text-[2rem] 
                            pt-48  pb-20">{movie.title}</p>
                        </div>
                        <div className="grid-movie grid grid-cols-4 gap-4 gap-y-20">
                                      
                        {
                            movie.info.map((info: MovieDetail) => {
                                return (
                                    
                                        <CardMovie
                                            image={info.img}
                                            movieName={info.name}
                                            category={movie.genre}
                                        />
                                    
                                )
                            })
                        }
                        </div>
                    </div>


                )
            })}
        </div>
    )
})
export default Index;
