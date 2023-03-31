import React, { useState } from "react";
import axios from "axios";

import "./Books.css";

export default function Books() {
  const [bookData, setBookData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data.docs[0].top_work);

    setBookData({
      ready: true,
      title: response.data.docs[0].title,
      author_name: response.data.docs[0].author_name,
      top_work: response.data.docs[0].top_work,
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
        <ul>
          <li>{bookData.top_work}</li>
          <li>a shadow in the ember</li>
        </ul>
      </div>
    );
  } else {
    let apiUrl = `https://openlibrary.org/search.json?title=from blood and ash`;
    let authorUrl = `https://openlibrary.org/search/authors.json?q=jennifer l armentrout`;
    axios.get(apiUrl).then(handleResponse);
    axios.get(authorUrl).then(handleResponse);

    return "Loading...";
  }
}
