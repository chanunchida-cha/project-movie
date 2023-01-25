import { MovieDetail, Movie } from "@/models/interface/InterFaceMovie";
import axios from "axios";
import { makeAutoObservable } from "mobx";

class MovieStore {
  //declare variable hear
  movies: Movie[] = [];
  moviesDetail: MovieDetail = {
    id: 0,
    name: "",
    img: "",
    des: "",
    trailer: "",
    directName: "",
    topcast: [],
  };

  constructor() {
    makeAutoObservable(this);
  }
  //create function hear

  async getMovie() {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_GET_MOVIE}`);
      this.movies = response.data;
    } catch (err) {
      console.log(err);
    }
  }

  async getDetailMovie(category: string, movieName: string) {
    try {
      let finalData = [];
      await this.getMovie();
      const details = this.movies.filter((movie) => movie.genre === category);
      const rawData = details.map((raws) => raws.info.map((raw) => raw));
      const data = rawData.map((datas) =>
        datas.filter((datax) => datax.name === movieName)
      );
      for (const movie of data) {
        finalData.push(...movie);
      }
      this.moviesDetail = finalData[0];
    } catch (err) {
      console.log(err);
    }
  }
}

export const movieStore = new MovieStore();
