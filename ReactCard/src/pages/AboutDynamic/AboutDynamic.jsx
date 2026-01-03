import React from "react";
import { useParams } from "react-router-dom";

const AboutDynamic = () => {
  const params = useParams();
  console.log(params);

  return <div>Opening a {params.id} About page</div>;
};

export default AboutDynamic;
