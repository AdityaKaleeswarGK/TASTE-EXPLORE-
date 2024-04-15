import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './RecipeDisplay.css';

export default function RecipeDisplay({ recipe }) {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };

    return (
        <div className='container'>
            <div className="recipe-box" onClick={handleOpenModal}>
                <h3 style={{ overflowWrap: 'break-word', wordBreak: 'break-word' } }>{recipe.title}</h3>
                <p className="description">{recipe.description}</p>
            </div>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{recipe.title}</Modal.Title>
                </Modal.Header> 
                <Modal.Body>
                    <p>{recipe.description}</p>
                    <h4>Ingredients:</h4>
                    <ol>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ol>
                    <h4>Instructions:</h4>
                    <ol>
                        {recipe.instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ol>
                </Modal.Body>
            </Modal>
        </div>
    );
}
