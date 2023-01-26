export interface Director {
  name: string;
  img: string;
  des: DesDirector;
  knownFor: KnownFor[];
}

export interface DesDirector {
  [key:string]:string
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
