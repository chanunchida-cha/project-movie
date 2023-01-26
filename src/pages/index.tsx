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
        <div>
            {movieStore.movies.map((movie: Movie) => {
                return (
                    <div className="category">
                        <p className="text-white font-normal text-2xl pt-48 pl-48 pb-20">{movie.title}</p>
                        <div className="grid-movie grid grid-cols-4 gap-4 gap-y-20">
                                      
                        {
                            movie.info.map((info: MovieDetail) => {
                                return (
                                    
                                        <CardMovie
                                            image={info.img}
                                            movieName={info.name}
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
