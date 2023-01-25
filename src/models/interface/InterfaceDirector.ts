export interface Director {
  name: string;
  img: string;
  des: Des;
}

export interface Des {
  AlternativeNames: string;
  Height: string;
  Born: string;
  Parents: string;
  Relatives: string;
  Starred: string;
  knownFor: KnownFor[];
}

export interface KnownFor {
  name: string;
  img: string;
  trailer: string;
}
