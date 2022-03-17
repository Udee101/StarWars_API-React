import React, { useEffect, useState } from "react";
import axios from "axios";

const Cards = () => {
  const [details, setDetails] = useState([]);

  //Fetch Request
  useEffect(() => {
    axios.get("https://swapi.dev/api/planets").then((res) => {
      console.log(res.data.results);
      setDetails(res.data.results); //Storage point of the result from fetch request
    });
  }, []);

  //Mapping properties from API to their DIVS
  return (
    <div className="layout">
      {details.map((detail, i) => (
        <div key={i} className="planet-container">
          <div className="img-container">
            <img src={require(`../images/${detail.name}.jpg`)} alt="planets" />
          </div>

          <div className="planet-details">
            <p>Name: {detail.name}</p>
            <p>Gravity: {detail.gravity}</p>
            <p>Climate: {detail.climate}</p>
            <p>Surface Water: {detail.surface_water}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Cards;
