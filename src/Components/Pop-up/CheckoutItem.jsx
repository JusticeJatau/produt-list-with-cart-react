import React from 'react'

const CheckoutItem = ({item, imageSrc}) => {
  return (
    <div className="item">
        <img src={imageSrc} alt={item.name}/>
        <div className="item-body">
            <h5 className="item-name">{item.name}</h5>
            <div className="item-details">
                <span className="item-qty red bold">{`${item.quantity}x`}</span>
                <span className="item-price">{`@$${item.price}`}</span>
            </div>
        </div>
        <span className="item-total">{`$${(item.price * item.quantity).toFixed(2)}`}</span>
    </div>
  )
}

export default CheckoutItem