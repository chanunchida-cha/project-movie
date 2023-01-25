export interface Director {
  name: string;
  img: string;
  des: Des;
}

export interface Des {
  alternativeNames: string;
  height: string;
  born: string;
  parents: string;
  relatives: string;
  starred: string;
  knownFor: KnownFor[];
}

export interface KnownFor {
  name: string;
  img: string;
  trailer: string;
}
