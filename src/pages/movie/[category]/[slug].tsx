import { useRouter } from "next/router";
import React, { ReactElement } from "react";

interface Props {}

function MovieDetail({}: Props): ReactElement {
  const rout = useRouter();
  console.log(rout);
  
  return <div></div>;
}

export default MovieDetail;
