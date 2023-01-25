import axios from "axios";
import { makeAutoObservable } from "mobx";

class SetStateStore {
  //declare variable hear
  categoryActive: string = "All";
  manageMovieActive: string = "All Movie Information";

  constructor() {
    makeAutoObservable(this);
  }
  //create function hear

  setCategoryActive(category: string) {
    this.categoryActive = category;
    console.log(this.categoryActive);
  }
  
  setManagementActive(activeMangeMovie: string) {
    this.manageMovieActive = activeMangeMovie;
    console.log(this.manageMovieActive);
  }
}

export const setStateStore = new SetStateStore();
