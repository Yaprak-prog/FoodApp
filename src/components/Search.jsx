import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./search.module.css";

function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");
  const BASE_URL = "https://api.spoonacular.com/recipes/complexSearch";
  const api_Key = "a555e411493b40fdbaf5bd82e23b366e";

  const getFoods = async () => {
    const response = await axios.get(
      `${BASE_URL}?query=${query}&apiKey=${api_Key}`
    );
    console.log(response.data.results);
    setFoodData(response.data.results);
  };

  useEffect(() => {
    getFoods();
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />

      {/* {foodData.Map((food) => {
        return <h1>{food.title}</h1>;
      })} */}
    </div>
  );
}

export default Search;
