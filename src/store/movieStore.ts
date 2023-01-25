import axios from "axios";
import { makeAutoObservable } from "mobx";

class MovieStore {
  //declare variable hear

  constructor() {
    makeAutoObservable(this);
  }
  //create function hear

  async getMovie() {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_GET_MOVIE}`);

      console.log(response);
      console.log('yes');
      
    } catch (err) {
      console.log(err);
    }
  }
}

export const movieStore = new MovieStore();
