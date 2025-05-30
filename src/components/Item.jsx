import React from "react";

function Item({ item }) {
  return (
    <div>
      <div>
        <img
          src={
            `https://api.spoonacular.com/cdn/ingredients_100x100/` + item.image
          }
        />
        <h3>{item.name}</h3>
        <h3>
          {item.amount} {item.unit}
        </h3>
      </div>
    </div>
  );
}

export default Item;
