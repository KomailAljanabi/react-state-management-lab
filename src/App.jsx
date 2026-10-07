// src/App.jsx
import { use, useState } from "react";

function App() {

  const items = [
    {
      id: 1,
      name: "Black T shirt",
      price: 5
    },
    {
      id: 2,
      name: "Hanger Set",
      price: 8
    },
    {
      id: 3,
      name: "Thoub",
      price: 12
    },
    {
      id: 4,
      name: "Computer Bag",
      price: 20
    },
    {
      id: 5,
      name: "Couch",
      price: 50
    },
    {
      id: 6,
      name: "Gaming Chair",
      price: 70
    }
  ]

  const [availableItems, setItems] = useState(items)
  const [shoppingCart, setCart] = useState([])
  const [availableBalance, setBalance] = useState(100)

  function handleAddToCart(item) {
    if (availableBalance < item.price) {
      alert("Insufficient balance!");
      return;
    }

    setCart([...shoppingCart, item]);
    setItems(availableItems.filter((i) => i.id !== item.id));
    setBalance(availableBalance - item.price);
  }

  function handleRemoveFromShoppingCart(item) {
    setItems([...availableItems, item]);
    setCart(shoppingCart.filter((i) => i.id !== item.id));
    setBalance(availableBalance + item.price);
  }

  return (
    <>
      <h1>Hello world!</h1>

      <h1>Sayed Hameds Closet</h1>

      <h2>Your Balance: {availableBalance}</h2>

      <h2>Available Items</h2>
      {availableBalance ?
        availableItems.map((item) =>
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ) : ''}

      <h2>Shopping Cart</h2>
      {shoppingCart ?
        shoppingCart.map((item) =>
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button onClick={() => handleRemoveFromShoppingCart(item)}>Remove from Cart</button>
          </div>
        ) : ''}

    </>
  );
}

export default App
