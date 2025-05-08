import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./fooddetail.module.css";
import ItemList from "./ItemList";

function FoodDetail({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  let BASE_URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const api_Key = "a555e411493b40fdbaf5bd82e23b366e";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${BASE_URL}?apiKey=${api_Key}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} />

        <div className={styles.recipeDetails}>
          <span>
            <strong>{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>-Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? " Vegetarian" : " Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? " Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>$ {food.pricePerServing / 100} Per serving</strong>
          </span>
        </div>

        <h2>Ingredients</h2>
        <ItemList food={food} isLoading={isLoading} />

        <h2>Instructions</h2>
        <div className={styles.recipeIns}>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => (
              <li key={step.number}>{step.step}</li>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default FoodDetail;
