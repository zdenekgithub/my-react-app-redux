import React, { useEffect } from "react";
import "./App.css";

import axios from "axios";

const options = {
  method: "GET",
  url: "https://open-weather-map27.p.rapidapi.com/weather",
  headers: {
    "X-RapidAPI-Key": "68f449dd52msh7ecfb571c0a9ebfp169c4cjsndeaec9a8c394",
    "X-RapidAPI-Host": "open-weather-map27.p.rapidapi.com",
  },
};

function App() {
  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Our weather app</h1>
    </div>
  );
}

export default App;
