import "./App.css";
import Books from "./Books.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Books />
        <footer>
          This project was coded by Megan Jackson and is {""}
          <a
            href="https://github.com/66Meg20/book-reccomend-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
