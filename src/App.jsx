import React, { useState , useEffect} from 'react';
import CreateArea from './CreateArea';
import RecipeDisplay from './RecipeDisplay';
export default function App() {
    const [recipes, setRecipes] = useState([]);
    const addRecipe = (newRecipe) => {
        setRecipes(prevRecipes => [...prevRecipes, newRecipe]);
    };
    useEffect(() => {
      console.log("Recipes:", recipes);
  }, [recipes]);
    return (
        <div>
            <CreateArea addRecipe={addRecipe} />
            <div className="recipe-container">
            {recipes.map((recipe, index) => (
                <RecipeDisplay key={index} recipe={recipe} />
            ))}</div>
        </div>
    );
}
