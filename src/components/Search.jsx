import { useState } from "react";
import { useEffect } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "02dc3358b7f04cc1a8f1f16ac37c4af4";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("Pizza");
  // Callback function and dipendency array.
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div>
      <input
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        value={query}
      />
    </div>
  );
}
