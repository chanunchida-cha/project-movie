import axios from "axios";
import { makeAutoObservable } from "mobx";

class ActorStore {
  //declare variavle hear

  constructor() {
    makeAutoObservable(this);
  }
  //create function hear

  
}

export const actorStore = new ActorStore();