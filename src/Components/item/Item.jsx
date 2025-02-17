import './item.css';

const Item = ({cItem, handleRemoveItem}) => {
  return (

    <div className='item'>
        <div className="item-body">
          <h5 className="item-name">{cItem.name}</h5>
          <div className="item-details">
            <span className="item-qty red bold">{`${cItem.quantity}x`}</span>
            <span className="item-price">{`@$${cItem.price}`}</span>
            <span className="item-total">{`$${(cItem.price * cItem.quantity).toFixed(2)}`}</span>
          </div>
        </div>
        <svg 
          onClick={()=>{
            handleRemoveItem(cItem.id)
          }}

          className='clickable'

          xmlns="http://www.w3.org/2000/svg" 
          width="10" height="10" fill="none" 
          viewBox="0 0 10 10"
        >
            <path 
              fill="#CAAFA7" 
              d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
            />
        </svg>
    </div>
  )
}

export default Item