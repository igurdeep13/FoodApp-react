import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import ItemList from "./ItemList";

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
    <div className={styles.recipeCard}>
      <div>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />
      </div>
      <div className={styles.recipeDetails}>
        <span>
          <strong>⏱{food.readyInMinutes} Minutes</strong>
        </span>
        <span>
          👨‍👧‍👦<strong> serves {food.servings} </strong>
        </span>
        <span>{food.Vegetarian ? " 🥗 Vegetarian" : " 🍗 Non-Vegetarian"}</span>
      </div>
      <h2>Ingredients</h2>
      <ItemList food = {food} isLoading={isLoading} />
      <h2>Instructions</h2>
      <div className={styles.recipeInstructions}>
        <ol>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => (
              <li>{step.step}</li>
            ))
          )}
        </ol>
      </div>
    </div>
  );
}
