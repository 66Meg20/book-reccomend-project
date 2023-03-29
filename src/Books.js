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
      authorKey: response.data.docs[0].key,
    });
    authorWorks();

    setReady(true);
  }
  function authorWorks() {
    let apiAuthorUrl = `https://openlibrary.org/authors/${bookData.authorKey}/works.json`;
    axios.get(apiAuthorUrl).then(handleResponse);
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
    let apiUrl = `https://openlibrary.org/search/authors.json?q=sarah j maas`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
