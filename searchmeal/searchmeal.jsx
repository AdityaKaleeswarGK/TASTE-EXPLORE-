import React, { useState } from "react";
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import Dishlist from "./dishlist";
import './searchmeal.css';
function SearchMeal() {
  const [cuisine, setCuisine] = useState('');
  const [maxCalories, setMaxCalories] = useState('');
  const [diet, setDiet] = useState('');
  const [intolerance, setIntolerance] = useState('');
  const [dish, setDish] = useState(null); 

  const handleCuisineChange = (e) => {
    setCuisine(e.target.value);
  };

  const handleMaxCaloriesChange = (e) => {
    setMaxCalories(e.target.value);
  };

  const handleDietChange = (e) => {
    setDiet(e.target.value);
  };

  const handleIntoleranceChange = (e) => {
    setIntolerance(e.target.value);
  };
  const handleSearchClick = () => {
    const params = new URLSearchParams({
      apiKey: '7342dce563d649818b7ea4c05b7aea17', 
    });

    if (cuisine) {
      params.append('cuisine', cuisine);
    }

    if (!isNaN(maxCalories) && maxCalories !== '') {
      params.append('maxCalories', maxCalories);
    }

    if (diet !== 'None' && diet !== '') {
      params.append('diet', diet);
    }

    if (intolerance !== 'None' && intolerance !== '') {
      params.append('intolerances', intolerance);
    }

    const url = `https://api.spoonacular.com/recipes/complexSearch?${params.toString()}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setDish(data);
        console.log(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  };
  return (
    <div className="form-container">
      <FloatingLabel
        controlId="floatingInputCuisine"
        label="Cuisine"
      >
        <Form.Control type="text" placeholder="Enter Type of Cuisine" value={cuisine} onChange={handleCuisineChange} />
      </FloatingLabel>

      <FloatingLabel controlId="floatingSelectDiet" label="Diet" style={{ marginBottom: '10px' }} className="select-box">
        <Form.Select aria-label="Floating label select example" value={diet} onChange={handleDietChange}>
          <option>Choose your diet</option>
          <option value="None">Any thing is good to go!!</option>
          <option value="Dairy">Gluten Free</option>
          <option value="Peanut">Ketogenic</option>
          <option value="Soy">Vegetarian</option>
          <option value="Egg">Lacto-Vegetarian</option>
          <option value="Seafood">Ovo-Vegetarian</option>
          <option value="Sulfite">Vegan</option>
          <option value="Gluten">Pescetarian</option>
          <option value="Seasame">Paleo</option>
          <option value="Tree Nut">Primal</option>
          <option value="Grain">Low FODMAP</option>
          <option value="Shellfish">Whole 30</option>
        </Form.Select>
      </FloatingLabel>

      <FloatingLabel controlId="floatingSelectIntolerance" label="Intolerance" className="select-box">
        <Form.Select aria-label="Floating label select example" value={intolerance} onChange={handleIntoleranceChange}>
          <option>Choose the ingredient you dont prefer in your food !!</option>
          <option value="None">None</option>
          <option value="Dairy">Dairy</option>
          <option value="Peanut">Peanut</option>
          <option value="Soy">Soy</option>
          <option value="Egg">Egg</option>
          <option value="Seafood">Seafood</option>
          <option value="Sulfite">Sulfite</option>
          <option value="Gluten">Gluten</option>
          <option value="Seasame">Seasame</option>
          <option value="Tree Nut">Tree Nut</option>
          <option value="Grain">Grain</option>
          <option value="Shellfish">Shellfish</option>
          <option value="Wheat">Wheat</option>
        </Form.Select>
      </FloatingLabel>

      <FloatingLabel controlId="floatingInputMaxCalories" label="Max Calories">
        <Form.Control
          type="number"
          placeholder="Enter max calories"
          value={maxCalories}
          onChange={handleMaxCaloriesChange}
        />
      </FloatingLabel>

      <button onClick={handleSearchClick} style={{ marginTop: '10px' }} className="search-button" >Search</button>
      {dish && <Dishlist dish={dish}/>}
    </div>


  );
}

export default SearchMeal;


