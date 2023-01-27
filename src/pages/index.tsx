import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import CardMovie from "@/layouts/CardMovie";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { movieStore } from "@/store/movieStore";
import { Movie, MovieDetail } from "@/models/interface/InterFaceMovie";
import { setStateStore } from "@/store/setStateStore";

const Index = observer(() => {
  useEffect(() => {
    const getMovie = async () => {
      await movieStore.getMovie();
    };
    getMovie();
  }, []);

  return (
    <div className="w-2/3 mx-auto object-none">
      {movieStore.movies.filter((movie)=>setStateStore.categoryActive === "All" ? movie :movie.title === setStateStore.categoryActive ).map((movie: Movie, index: number) => {
        return (
          <div className="category" key={index}>
            {setStateStore.searchText === "" ? (
              <div className="grid-movie grid grid-cols-4 gap-4 gap-y-20">
                <p
                  className="text-white font-normal text-[2rem] 
                            pt-40  pb-20"
                >
                  {movie.title}
                </p>
              </div>
            ) : null}
            <div className="grid-movie grid grid-cols-4 gap-4 gap-y-20 pt-20 ">
              {movie.info
                .filter((item) =>
                  item.name
                    .toLowerCase()
                    .includes(setStateStore.searchText.toLowerCase())
                )
                .map((info: MovieDetail, index: number) => {
                  return (
                    <div>
                      <CardMovie
                        key={index}
                        image={info.img}
                        movieName={info.name}
                        category={movie.genre}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
});
export default Index;
