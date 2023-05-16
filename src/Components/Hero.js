import React, { useState } from "react";
import axios from "axios";

const Hero = (props) => {
  const [joke, setJoke] = useState("");

  const data = async () => {
    const options = {
      method: "GET",
      url: "https://dad-jokes.p.rapidapi.com/random/joke",
      headers: {
        "X-RapidAPI-Key": `${props.ApiKey}`,
        "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setJoke(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div class="px-4 py-5 my-5 text-center">
        <h1 class="display-5 fw-bold">Dad Jokes</h1>
        <div class="col-lg-6 mx-auto">
          {joke.body && <p>{joke.body[0].setup}</p>}
          {joke.body && <p>{joke.body[0].punchline}</p>}
          {/* <p class="lead mb-4">{joke.body[0].punchline}</p> */}
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              onClick={() => {
                data();
              }}
              type="button"
              class="btn btn-primary btn-lg px-4 gap-3"
            >
              Click Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
