export interface Actor {
  name: string;
  img: string;
  des: DesActor;
  knownFor: KnownFor[];
}

export interface DesActor {
  [key: string]: string;
  alternativeNames: string;
  height: string;
  born: string;
  parents: string;
  relatives: string;
  starred: string;
}

export interface KnownFor {
  name: string;
  img: string;
  trailer: string;
}
