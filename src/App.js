import "./App.css";
import List from "./pages/List";
import Header from "./pages/Header";
import data1 from "./API/CONTENTLISTINGPAGE-PAGE1.json";
import data2 from "./API/CONTENTLISTINGPAGE-PAGE2.json";
import data3 from "./API/CONTENTLISTINGPAGE-PAGE3.json";
import { useEffect, useState } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState(
    data1.page["content-items"].content
  );
  const [moviesList, setMoviesList] = useState([]);
  const searchFn = (searchTxt) => {
    // console.log(searchTxt);
    setMoviesList((prev) => {
      return selectedPage.filter((obj) => {
        let mn = obj.name;
        return !!mn.toLowerCase().includes(searchTxt.toLowerCase());
      });
    });
  };
  useEffect(() => {
    setMoviesList(selectedPage);
  }, [selectedPage]);
  return (
    <div className="body-background">
      <Header searchFn={searchFn} />
      <List moviesList={moviesList} />
      <div className="container text-end">
        <button
          type="button"
          class="btn btn-light mx-1"
          onClick={() => setSelectedPage(data1.page["content-items"].content)}
        >
          1
        </button>
        <button
          type="button"
          class="btn btn-light mx-1"
          onClick={() => setSelectedPage(data2.page["content-items"].content)}
        >
          2
        </button>
        <button
          type="button"
          class="btn btn-light mx-1"
          onClick={() => setSelectedPage(data3.page["content-items"].content)}
        >
          3
        </button>
      </div>
    </div>
  );
}

export default App;
