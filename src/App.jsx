import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import NavBar from "./components/NavBar";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";
import "./App.css";
function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodID, setFoodID] = useState("");
  return (
    <div className="App">
      <NavBar />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodID={setFoodID} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodID={foodID} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
