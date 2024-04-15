import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './CreateArea.css'
export default function CreateArea({ addRecipe }) {
    const [recipe, setRecipe] = useState({
        title: '',
        description: '',
        ingredients: [],
        instructions: []
    });
    const [showModal, setShowModal] = useState(false);
    const [ingredientInput, setIngredientInput] = useState('');
    const [instructionInput, setInstructionInput] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [editType, setEditType] = useState(null);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setEditIndex(null);
        setEditType(null);
    };

    const handleAddIngredient = () => {
        if (ingredientInput.trim() !== '') {
            if (editType === 'ingredient' && editIndex !== null) {
                const updatedIngredients = [...recipe.ingredients];
                updatedIngredients[editIndex] = ingredientInput.trim();
                setRecipe(prevState => ({
                    ...prevState,
                    ingredients: updatedIngredients
                }));
            } else {
                setRecipe(prevState => ({
                    ...prevState,
                    ingredients: [...prevState.ingredients, ingredientInput.trim()]
                }));
            }
            setIngredientInput('');
            setEditIndex(null);
            setEditType(null);
        }
    };

    const handleAddInstruction = () => {
        if (instructionInput.trim() !== '') {
            if (editType === 'instruction' && editIndex !== null) {
                const updatedInstructions = [...recipe.instructions];
                updatedInstructions[editIndex] = instructionInput.trim();
                setRecipe(prevState => ({
                    ...prevState,
                    instructions: updatedInstructions
                }));
            } else {
                setRecipe(prevState => ({
                    ...prevState,
                    instructions: [...prevState.instructions, instructionInput.trim()]
                }));
            }
            setInstructionInput('');
            setEditIndex(null);
            setEditType(null);
        }
    };

    const handleKeyPress = (e, action) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (action === 'ingredient') {
                handleAddIngredient();
            } else if (action === 'instruction') {
                handleAddInstruction();
            }
        }
    };

    const handleEdit = (index, type) => {
        setEditIndex(index);
        setEditType(type);
        if (type === 'ingredient') {
            setIngredientInput(recipe.ingredients[index]);
        } else if (type === 'instruction') {
            setInstructionInput(recipe.instructions[index]);
        }
    };

    const handleAddRecipe = () => {
        addRecipe(recipe); 
        setShowModal(false);
        setRecipe({
            title: '',
            description: '',
            ingredients: [],
            instructions: []
        });
    };

    return (
        <div>
        <div className="basepage-container">
           <div className="basepage">
            <h2>Add a new Recipe</h2>
            <button onClick={handleClick} className="add-button">Add</button>
            </div>
        </div>
        <Modal show={showModal} onHide={handleCloseModal} className="custom-modal">
        <Modal.Header closeButton className="modal-header">
          <Modal.Title className="modal-title">Add Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <Form>
            <Form.Group controlId="title" className="form-group">
              <Form.Label className="form-label">Title:</Form.Label>
              <Form.Control
                type="text"
                value={recipe.title}
                onChange={(e) => setRecipe({ ...recipe, title: e.target.value })}
                className="form-control"
              />
            </Form.Group>
            <Form.Group controlId="description" className="form-group">
              <Form.Label className="form-label">Description:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={recipe.description}
                onChange={(e) => setRecipe({ ...recipe, description: e.target.value })}
                className="form-control"
              />
            </Form.Group>
          </Form>
          <hr />
          <div >
            <h4>Ingredients</h4>
            <div className='ind-container'>
            <input
              type="text"
              value={ingredientInput}
              onChange={(e) => setIngredientInput(e.target.value)}
              onKeyPress={(e) => handleKeyPress(e, 'ingredient')}
              className="form-control"
            />
            <button onClick={handleAddIngredient} className="bind">Add/Edit</button>
          </div>
          <ol className="instruction-list">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} onClick={() => handleEdit(index, 'ingredient')} className="instruction-item">
              {ingredient}
            </li>
          ))}
        </ol>        
          </div>
          <hr />
          <div >
          <h4>Instructions</h4>
          <div className='ind-container'>
            <input
              type="text"
              value={instructionInput}
              onChange={(e) => setInstructionInput(e.target.value)}
              onKeyPress={(e) => handleKeyPress(e, 'instruction')}
              className="form-control"
            />
            <button onClick={handleAddInstruction} className="bind">Add/Edit</button>
            </div>
            <ol className="instruction-list">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} onClick={() => handleEdit(index, 'instruction')}  className="instruction-item">
                  {instruction}
                </li>
              ))}
            </ol>
          </div>
        </Modal.Body>
        <Modal.Footer className="modal-header">
          <button variant="primary" onClick={handleAddRecipe} className="add-button">Save Recipe</button>
        </Modal.Footer>
      </Modal>      
        </div>
    );
}