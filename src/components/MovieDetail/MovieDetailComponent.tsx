import { movieStore } from "@/store/movieStore";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { directorStore } from "@/store/directorStore";
import { actorStore } from "@/store/actorStore";
import DetailMovieLayout from "@/layouts/movieDetailLayout/DetailMovieLayout";
import DetailStaffLayout from "@/layouts/movieDetailLayout/DetailStaffLayout";

type Props = {};

const MovieDetailComponent = observer(({}: Props) => {
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

  const moviesDetail = movieStore.moviesDetail;
  const directorDetail = directorStore.directorDetail;
  const actors = actorStore.actors;

  console.log(directorDetail);

  return (
    <div>
      <div>
        <DetailMovieLayout
          image={moviesDetail.img}
          movieName={moviesDetail.name}
          movieDetail={moviesDetail.des}
          video={moviesDetail.trailer}
        />
      </div>
      <div className="mt-10">
        <DetailStaffLayout
          title="ผู้กำกับ"
          name={directorDetail.name}
          image={directorDetail.img}
          history={directorDetail.des}
          knownFor={directorDetail.knownFor}
        />
      </div>
      <div>
        {moviesDetail.topcast.map((topcast) => {
          return actors.map((actor, index) => {
            if (actor.name === topcast) {
              return (
                <div className="mt-10" key={index}>
                  <DetailStaffLayout
                    title="นักแสดงนำ"
                    name={actor.name}
                    image={actor.img}
                    history={actor.des}
                    knownFor={actor.knownFor}
                  />
                </div>
              );
            }
          });
        })}
      </div>
    </div>
  );
});

export default MovieDetailComponent;
