import Header from './Components/Header' /* importancion de component */
import Target from './Components/Target'  /* importancion de component */
import { useState } from 'react'
import { db } from './data/db' /* importancion de db en forma de objeto{} */


function App() {
  const [data, setData] = useState(db) /* useState para actualizacion de base de datos */
  const [cart, setCart] = useState([]) /* UseState para actualizar un array vacio */
 
  function addToCart(item){
   const itemExist = cart.findIndex(shoes => shoes.id === item.id )
   if(itemExist >= 0){
    const updateCart = [...cart]
    updateCart[itemExist].quantity++
    setCart(updateCart)

   }
   else{
    item.quantity = 1
    setCart([...cart, item])
   }
  }

  return (
    <>
      <Header />

      <h1>THE NEW!</h1>

      <div className='target-container'>
        {data.map((shoes) => ( /* se recorre un array y a cada objeto se le asigna el nombre */
          <Target
            key={shoes.id}
            shoes={shoes} /* nombreDelProp={parametros del objeto} */
            setCart={setCart} /* pasamos como prop la funcion setCart */
          />
        ))}
      </div>



    </>
  )
}

export default App
