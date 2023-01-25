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
  }

  setManagementActive(activeMangeMovie: string) {
    this.manageMovieActive = activeMangeMovie;
  }
}

export const setStateStore = new SetStateStore();
