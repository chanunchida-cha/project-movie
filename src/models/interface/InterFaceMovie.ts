export interface Movie {
  genre: string;
  title: string;
  info: MovieDetail[];
}

export interface MovieDetail {
  id: number;
  name: string;
  img: string;
  des: string;
  trailer: string;
  directName: string;
  topcast: string[];
}
