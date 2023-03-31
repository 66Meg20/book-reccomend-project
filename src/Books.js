import React, { useState } from "react";
import axios from "axios";

import "./Books.css";

export default function Books() {
  const [bookData, setBookData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);

    setBookData({
      ready: true,
      title: response.data.docs[0].title,
      author_name: response.data.docs[0].author_name,
    });
  }

  if (bookData.ready) {
    return (
      <div className="Books">
        {" "}
        <h1>{bookData.title}</h1>
        <form>
          <input type="search" placeholder="book name" />
          <button className="btn btn-primary"> Search </button>
        </form>
        <ul>
          <li> A court of thorns and roses</li>
          <li> From blood and ash</li>
          <li> Cresent city</li>
        </ul>
        <h2>{bookData.author_name}</h2>
      </div>
    );
  } else {
    let apiUrl = `https://openlibrary.org/search.json?title=throne+of+glass`;
    let authorUrl = `https://openlibrary.org/search/authors.json?q=${bookData.author_name}`;
    axios.get(apiUrl).then(handleResponse);
    axios.get(authorUrl).then(handleResponse);

    return "Loading...";
  }
}
