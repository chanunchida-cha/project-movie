export interface Director {
  name: string;
  img: string;
  des: DesDirector;
  knownFor: KnownFor[];
}

export interface DesDirector {
  alternativeNames: string;
  height: string;
  born: string;
  parents: string;
  relatives: string;
  directed: string;
  [key:string]:string
}

export interface KnownFor {
  name: string;
  img: string;
  trailer: string;
}
