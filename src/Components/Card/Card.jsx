import React from 'react'
import './card.css'
import img1 from '../../assets/images/image-waffle-mobile.jpg';
import img2 from '../../assets/images/image-waffle-desktop.jpg';
import Add from '../Add/Add';

const Card = ({imageSrc ,product, id, handleAddToCart}) => {

  return (
    <div className="card">
      <div className="card-top">
        <img src={imageSrc} alt="" />
        <Add product={product} id={id} handleAddToCart={handleAddToCart}/>
      </div>
      <div className="card-body">
        <p className="card-text">{product.name}</p>
        <h4 className="card-title">{product.description}</h4>
        <p className="price red bold">{`$${product.price}`}</p>
      </div>
      
    </div>
  )
}

export default Card