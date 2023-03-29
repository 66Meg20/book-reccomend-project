import React, { useState } from "react";
import axios from "axios";
import "./Books.css";

export default function Books() {
  const [ready, setReady] = useState(false);
  const [title, setTitle] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTitle(response.data.docs[0].title);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Books">
        {" "}
        <h1>{title}</h1>
        <form>
          <input type="search" placeholder="book name" />
          <button className="btn btn-primary"> Search </button>
        </form>
        <ul>
          <li> A court of thorns and roses</li>
          <li> From blood and ash</li>
          <li> Cresent city</li>
        </ul>
      </div>
    );
  } else {
    let apiUrl = `https://openlibrary.org/search.json?q=from+blood+and+ash`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
