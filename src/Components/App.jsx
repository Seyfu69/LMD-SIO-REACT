import { useState } from 'react'
import logo from '../assets/logosneaker.jpg';
import '../styles/App.css';
import Banner from './Banner';
import ShoppingList from './ShoppingList';
import Cart from './Cart';


function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (sneaker) => {
    setCart(prevCart => {

      const existingItem = prevCart.find(item => item.id === sneaker.id);
      
      if (existingItem) {
        return prevCart.map(item => 
          item.id === sneaker.id 
            ? {...item, quantity: item.quantity + 1} 
            : item
          );
        } else {
          return [...prevCart, { ...sneaker, quantity: 1 }];
        }
      });
    };
  return (
    <div className='App'>
      <Banner />
      <ShoppingList onAddToCart={addToCart} />
      <Cart cartItems={cart} />
    </div>

  );
}
export default App;