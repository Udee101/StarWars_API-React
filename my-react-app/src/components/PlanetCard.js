import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card"

const Cards = () => {
  const [details, setDetails] = useState([]);

  //Fetch Request
  useEffect(() => {
    axios.get("https://swapi.dev/api/planets").then((res) => {
      console.log(res.data.results);
      setDetails(res.data.results); //Storage point of the result from fetch request
    });
  }, []);

  //Mappinconst Cg properties from API to their DIVS
  return (
    <div className="layout">
      {details.map((detail, i) => (
        return (
          <Card key={i} detail={detail}/>
        )
      ))}
    </div>
  );
};
export default Cards;
