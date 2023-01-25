import { Director } from "./../models/interface/InterfaceDirector";
import axios from "axios";
import { makeAutoObservable } from "mobx";

class DirectorStore {
  //declare variable hear
  directors: Director[] = [];
  directorDetail: Director = {
    name: "",
    img: "",
    des: {
      alternativeNames: "",
      height: "",
      born: "",
      parents: "",
      relatives: "",
      directed: "",
    },
    knownFor: [],
  };

  constructor() {
    makeAutoObservable(this);
  }
  //create function hear

  async getDirector() {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_GET_DIRECTOR}`
      );
      this.directors = response.data;
    } catch (err) {
      console.log(err);
    }
  }

  async filterDirector(directorName: string) {
    console.log(directorName);

    try {
      await this.getDirector();
      const director = this.directors.filter(
        (director) => director.name === directorName
      );

      this.directorDetail = director[0];
      console.log("director", this.directorDetail);
    } catch (err) {
      console.log(err);
    }
  }
}

export const directorStore = new DirectorStore();
