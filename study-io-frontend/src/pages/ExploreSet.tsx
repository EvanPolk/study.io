import React from "react";
import { useParams } from "react-router-dom";

function ExploreSet() {
  let { setId } = useParams();
  return <div>{setId}</div>;
}

export default ExploreSet;
