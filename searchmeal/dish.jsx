import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './dish.css';
export default function Dish({ meal }) {
  const [showModal, setShowModal] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);

  const handleRecipeClick = () => {
    // Fetch ingredients
    const url = `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=7342dce563d649818b7ea4c05b7aea17`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setIngredients(data.extendedIngredients);
      })
      .catch(() => {
        console.log('error');
      });

    // Fetch instructions
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/analyzedInstructions?apiKey=7342dce563d649818b7ea4c05b7aea17`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0 && data[0].steps.length > 0) {
          setInstructions(data[0].steps);
        } else {
          setInstructions([{ step: 'Instructions not available' }]);
        }
      })
      .catch(() => {
        console.log('Error fetching recipe instructions');
      })
      .finally(() => {
        // Show modal after both fetch requests are completed
        setShowModal(true);
      });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <article>
    <div className='meal-container'>
      <h1>{meal.title}</h1>
      <img src={meal.image} alt='image of the food' />
      <button onClick={handleRecipeClick} className='get-recipe-button'>
        Get Recipe
      </button>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header>
          <Modal.Title>{meal.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Ingredients:</h3>
          <ol>
            {ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient.name}: {ingredient.amount} {ingredient.unit}
              </li>
            ))}
          </ol>
          <h3>Instructions:</h3>
          <ol>
            {instructions.map((step, index) => (
              <li key={index}>{step.step}</li>
            ))}
          </ol>
        </Modal.Body>
      </Modal>
    </article>
  );
}
