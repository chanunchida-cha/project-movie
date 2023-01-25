import {MovieDetail, Movie } from "@/models/interface/InterFaceMovie";
import axios from "axios";
import { makeAutoObservable } from "mobx";

class MovieStore {
  //declare variable hear
  movies: Movie[] = [];
  moviesDetail :MovieDetail = {
  id: 0,
  name: "",
  img: "",
  des: "",
  trailer: "",
  directName: "",
  topcast: [],
}

  constructor() {
    makeAutoObservable(this);
  }
  //create function hear

  async getMovie() {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_GET_MOVIE}`);
      this.movies = response.data;

      console.log(this.movies);
    } catch (err) {
      console.log(err);
    }
  }

  async getDetailMovie(category: string, movieName: string) {
    try {
      await this.getMovie();
      const detail = this.movies
        .filter((movie) => movie.genre === "action")
        .map((item) =>
          item.info.filter((item) => item.name === "The Avengers")
        );

    console.log();
    
    } catch (err) {
      console.log(err);
    }
  }
}

export const movieStore = new MovieStore();
