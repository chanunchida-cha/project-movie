import { movieStore } from "@/store/movieStore";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect } from "react";

interface Props {}

function MovieDetail({}: Props): ReactElement {
  const route = useRouter();
  console.log(route);
  const category = String(route.query.category);
  const movieName = String(route.query.slug);

  useEffect(() => {
    const getMovieDetail = async () => {
      await movieStore.getDetailMovie(category, movieName);
    };
    getMovieDetail();
  }, []);

  console.log("detail", movieStore.moviesDetail);

  return <div>aa</div>;
}

export default MovieDetail;
