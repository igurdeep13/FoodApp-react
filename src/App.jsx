import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import NavBar from "./components/NavBar";
import "./App.css"
function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <div className="App">
      <NavBar />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <FoodList foodData={foodData} />
    </div>
  );
}

export default App;
