import { movieStore } from "@/store/movieStore";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { directorStore } from "@/store/directorStore";
import CardMovie from "@/layouts/CardMovie";
import { actorStore } from "@/store/actorStore";
import MovieDetailComponent from "@/components/MovieDetail/MovieDetailComponent";


interface Props {}

const MovieDetail = observer(() => {
  const route = useRouter();
  const category = String(route.query.category);
  const movieName = String(route.query.slug);

  useEffect(() => {
    if (!route.isReady) return;
    const getMovieDetail = async () => {
      await movieStore.getDetailMovie(category, movieName);
    };
    getMovieDetail();
  }, [route]);

  useEffect(() => {
    if (!movieStore.moviesDetail.directName) return;
    const getDirectorDetail = async () => {
      await directorStore.filterDirector(movieStore.moviesDetail.directName);
    };
    getDirectorDetail();
  }, [movieStore.moviesDetail.directName]);

  useEffect(() => {
    const getActor = async () => {
      await actorStore.getActor();
    };
    getActor();
  }, [movieStore.moviesDetail.directName]);

  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 text-white">
     <MovieDetailComponent/>
    </div>
  );
});
export default MovieDetail;
