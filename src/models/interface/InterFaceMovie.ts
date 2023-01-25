export interface Movie {
  genre: string;
  title: string;
  info: Info[];
}

export interface Info {
  id: number;
  name: string;
  img: string;
  des: string;
  trailer: string;
  directName: string;
  Topcase: string[];
}
