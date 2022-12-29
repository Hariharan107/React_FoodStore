import React,{useState} from 'react';
import Header from './Components/Layout/Header'
import Meals from './Components/Meals/Meals'
import Cart from './Components/Cart/Cart';
import CartProvider from './Components/store/CartProvider';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>
function App() {
  const [CartIsShown, setCartIsShown] = useState(false)
  
  const showcartHandler=()=>
  {
    setCartIsShown(true)
  }
  const hidecartHandler=()=>
  {
    setCartIsShown(false)
  }

  return (
    <CartProvider>
      {CartIsShown && <Cart onHideCart={hidecartHandler}/>}
      <Header onShowcart={showcartHandler} />
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
