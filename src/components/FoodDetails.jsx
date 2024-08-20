import { useEffect, useState } from "react";

export default function FoodDetails({ foodID }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodID}/information`;
  const API_KEY = "02dc3358b7f04cc1a8f1f16ac37c4af4";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodID]);

  return (
    <div>
      <div>
        <h1>{food.title}</h1>
        <img src={food.image} alt="" />
      </div>
      <span>
        <strong>⏱{food.readyInMinutes} Minutes</strong>
        <span>
          👨‍👧‍👦<strong> serves {food.servings} </strong>
        </span>
        <span>{food.Vegetarian ? " 🥗 Vegetarian" : " 🍗 Non-Vegetarian"}</span>
      </span>
      <div>
        <h2>Instructions</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          food.analyzedInstructions[0].steps.map((step) => <li>{step.step}</li>)
        )}
      </div>
    </div>
  );
}
