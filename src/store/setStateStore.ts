import axios from "axios";
import { makeAutoObservable } from "mobx";

class SetStateStore {
  //declare variable hear
  categoryActive: string = "All";
  manageMovieActive: string = "All Movie Information";
  searchText:string = ""

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

  setSearchText = (searchText: string) => {
    this.searchText = searchText;
    console.log(this.searchText);
  };

}

export const setStateStore = new SetStateStore();
