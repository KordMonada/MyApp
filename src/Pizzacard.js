import React, { useState } from 'react';
import './Pizza.css'; 
import pizzaImage from './Image/1.png'; 
import cartIcon from './Image/2.png';   


const Pizzacard = () => {
    const [quantity, setQuantity] = useState(1);
  
    const handleDecrease = () => {
      if (quantity > 1) setQuantity(quantity - 1);
    };
  
    const handleIncrease = () => {
      setQuantity(quantity + 1);
    };
  
    return (
      <div className="pizza-card">
        <img className="pizza-image" src={pizzaImage} alt="Пицца" />
        <h2 className="pizza-title">Пепперони</h2>
        <p className="pizza-description">
          Ничего лишнего! Томатный соус, колбаски Пепперони и Моцарелла
        </p>
  
        <div className="pizza-size">
          <select className="size-select" defaultValue="">
            <option value="" disabled>Диаметр</option>
            <option value="25">25 см</option>
            <option value="30">30 см</option>
            <option value="35">35 см</option>
          </select>
        </div>
  
        <p className="pizza-cost">от 550 ₽</p>
  
        <div className="quantity-controls">
          <button className="decrease-button" onClick={handleDecrease}>-</button>
          <input
            type="number"
            className="quantity-input"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            min="1"
          />
          <button className="increase-button" onClick={handleIncrease}>+</button>
          <button className="add-to-cart">
            <img src={cartIcon} alt="Корзина" />
        </button>
        </div>
      </div>
    );
  };
  
  export default Pizzacard;
