import React, { useState } from "react";
import axios from "axios";
import "./Books.css";

export default function Books() {
  const [ready, setReady] = useState(false);
  const [bookData, setBookData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setBookData({
      name: response.data.docs[0].name,
      key: response.data.docs[0].key,
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div className="Books">
        {" "}
        <h1>{bookData.name}</h1>
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
    let apiUrl = `https://openlibrary.org/search/authors.json?q=sarah%20j%20maas`;
    let apiAuthorUrl = `https://openlibrary.org/authors/OL7115219A/works.json`;
    axios.get(apiUrl).then(handleResponse);
    axios.get(apiAuthorUrl).then(handleResponse);
    return "Loading...";
  }
}
