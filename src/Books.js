import React from "react";
import "./Books.css";

export default function Books() {
  return (
    <div className="Books">
      {" "}
      <h1>Throne of Glass</h1>
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
}
