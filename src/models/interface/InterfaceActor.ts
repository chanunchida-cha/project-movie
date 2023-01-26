export interface Actor {
  name: string;
  img: string;
  des: DesActor;
  knownFor: KnownFor[];
}

export interface DesActor {
  alternativeNames: string;
  height: string;
  born: string;
  parents: string;
  relatives: string;
  starred: string;
  [key:string]:string
}

export interface KnownFor {
  name: string;
  img: string;
  trailer: string;
}
