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
      await this.getMovie();
      for (const movie of this.movies) {
        if (movie.genre === category) {
          for (const detail of movie.info) {
            if (detail.name === movieName) {
              return this.moviesDetail === detail;
            }
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
}

export const movieStore = new MovieStore();
