import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";

const link = {
  display : 'flex',
  margin : '10px 90px',
  border : '2px solid #40b48e',
  padding : '10px 15px',
  borderRadius : '10px',
  width : '90px',
  fontWeight :'600',
  backgroundColor : 'rgba(161, 161, 161, 0.2)'
}

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;

  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url} target="_blank" rel="noopener noreferrer" style={link} >
        VIEW MORE
      </a>
      <button onClick={() => setShow(!show)}>Ingredients</button>
      {show && <RecipeDetails ingredients={ingredients} />}
    </div>
  );
};

export default Recipe;
