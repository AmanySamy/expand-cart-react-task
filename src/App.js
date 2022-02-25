import axios from "axios";
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./containers/Home";


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

        setResturants(res.data)
        setTags(uniqueTags)
        console.log(uniqueTags)
      }
      ).catch(err =>
        console.log(err))
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home tags={Tags} resturants={Resturants} />} />
          {/* <Route path="expenses" element={<Expenses />} /> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
