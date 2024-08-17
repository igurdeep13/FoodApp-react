import { useEffect } from "react";

export default function FoodDetails({ foodID }) {
  const URL = `https://api.spoonacular.com/recipes/${foodID}/information`;
  const API_KEY =  "02dc3358b7f04cc1a8f1f16ac37c4af4";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
    }
    fetchFood();
  }, []);

  return <div>Food details {foodID}</div>;
}
