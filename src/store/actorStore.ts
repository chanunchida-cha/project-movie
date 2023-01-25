import { Actor } from "@/models/interface/InterfaceActor";
import axios from "axios";
import { makeAutoObservable } from "mobx";

class ActorStore {
  //declare variable hear
  actors: Actor[] = [];

  constructor() {
    makeAutoObservable(this);
  }
  //create function hear

  async getActor() {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_GET_ACTOR}`);
      this.actors = response.data
    } catch (err) {
      console.log(err);
    }
  }
}

export const actorStore = new ActorStore();
