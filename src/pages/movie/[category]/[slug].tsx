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

  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 text-white">
      <MovieDetailComponent />
    </div>
  );
});
export default MovieDetail;
