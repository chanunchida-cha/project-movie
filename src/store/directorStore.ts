import axios from "axios";
import { makeAutoObservable } from "mobx";

class DirectorStore {
  //declare variable hear

  constructor() {
    makeAutoObservable(this);
  }
  //create function hear
}

export const directorStore = new DirectorStore();
