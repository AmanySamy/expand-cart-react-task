import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./containers/Home";
import ResturantDetails from "./containers/ResturantDetails";
import ResturantContext from "./context/ResturantContext";



function App() {
  const [Resturants, setResturants] = useState([])
  const [Tags, setTags] = useState([])

  useEffect(() => {
    axios.get('data.json')
      .then(res => {
        // console.log(res.data)

        let uniqueTags = res.data.brands
          .reduce(function (previousValue, currentValue) {
            currentValue.tags.map(tag => {
              if (previousValue.filter(e => e.name === tag.name).length == 0) {
                previousValue.push(tag)
              }
            })
            return previousValue
          }, [])

        setResturants(res.data.brands)
        setTags(uniqueTags)
      }
      ).catch(err =>
        console.log(err))
  }, [])

  return (

    <div className="App">
      <ResturantContext.Provider value={{ Resturants: Resturants, UniqueTags: Tags }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resturants/:name" element={<ResturantDetails />} />

          </Routes>
        </BrowserRouter>
      </ResturantContext.Provider>
    </div>
  );
}

export default App;
