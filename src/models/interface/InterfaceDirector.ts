export interface Director {
  name: string;
  img: string;
  des: Des;
  knownFor: KnownFor[];
}

export interface Des {
  alternativeNames: string;
  height: string;
  born: string;
  parents: string;
  relatives: string;
  directed: string;
  
}

export interface KnownFor {
  name: string;
  img: string;
  trailer: string;
}
