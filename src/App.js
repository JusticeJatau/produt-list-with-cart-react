import { useEffect, useState } from 'react';
import './App.css';
import List from './Components/List/List'
import Cart from './Components/Cart/Cart'
import PopUp from './Components/Pop-up/PopUp';
import useScreenSize from './Hook/useScreenSize';

function App() {
  const shoppingList = [
    {
      name: "Waffle",
      description: "Waffle with Berries",
      price: "6.50"
    },
    {
      name: "Crème Brûlée",
      description: "Vanilla Bean Crème Brûlée",
      price: "7.00"
    },
    {
      name: "Macaron",
      description: "Macaron Mix of Five",
      price: "8.00"
    },
    {
      name: "Tiramisu",
      description: "Classic Tiramisu",
      price: "5.50"
    },
    {
      name: "Baklava",
      description: "Pistachio Baklava",
      price: "4.00"
    },
    {
      name: "Pie",
      description: "Lemon Meringue Pie",
      price: "5.00"
    },
    {
      name: "Cake",
      description: "Red Velvet Cake",
      price: "4.50"
    },
    {
      name: "Brownie",
      description: "Salted Caramel Brownie",
      price: "4.50"
    },
    {
      name: "Panna Cotta",
      description: "Vanilla Panna Cotta",
      price: "6.50"
    }
  
  ]

  const [cartList, setCartList] = useState([])
  const [total, setTotal] = useState(0)
  const [checkOut, setCheckOut] = useState(false)

  const handleCheckOut = (value)=>{
    setCheckOut(value)
  }

  const handleAddToCart = (item)=>{
    const existingItem = cartList.find((_item)=>(
        _item.id === item.id
    ))


    if(existingItem){
        setCartList(cartList.map((_item)=>(
          _item.id === item.id? 
          {..._item, quantity: item.quantity}:_item
      )))
    }else{
        setCartList([...cartList, item])
    }
  }

  const handleRemoveItem = (id)=>{
    const filtered = cartList.filter((_item)=>(
      _item.id !== id
    ))

    setCartList(filtered)
  }

  useEffect(()=>{
    let totalPrice = 0;

    cartList.forEach((_item)=>{
      totalPrice += _item.quantity * _item.price
    })

    setTotal(totalPrice)
  }, [cartList])

  return (
    <main className='App'>
      {
        checkOut? <PopUp cartList={cartList} handleCheckOut={handleCheckOut} total={total}/>:""
      }
      <List shoppingList={shoppingList} handleAddToCart={handleAddToCart} useScreenSize={useScreenSize}/>
      <Cart cartList={cartList} handleRemoveItem={handleRemoveItem} total={total} handleCheckOut={handleCheckOut}/>
    </main>
  );
}

export default App;
