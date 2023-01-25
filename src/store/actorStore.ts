import axios from "axios";
import { makeAutoObservable } from "mobx";

class ActorStore {
  //declare variable hear

  constructor() {
    makeAutoObservable(this);
  }
  //create function hear

  
}

export const actorStore = new ActorStore();
