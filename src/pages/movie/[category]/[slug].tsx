import { movieStore } from "@/store/movieStore";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect } from "react";
import { observer } from "mobx-react-lite";

interface Props {}

const MovieDetail= observer( ()=> {
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

  console.log("store :", movieStore.moviesDetail);

  return <div>aa</div>;
}
)
export default MovieDetail;
