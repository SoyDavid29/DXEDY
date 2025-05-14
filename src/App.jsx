import Header from './Components/Header' /* importancion de component */
import Cart from './Components/Cart'
import Target from './Components/Target'  /* importancion de component */
import { useState } from 'react'
import { db } from './data/db' /* importancion de db en forma de objeto{} */


function App() {
  const [data, setData] = useState(db) /* useState para actualizacion de base de datos */

  const [cart, setCart] = useState([]) /* UseState para actualizar un array vacio "cart" */

  const [open, setOpen] = useState(false) /* useState globlal para mis componentes */
  const toggleCart = () => setOpen(prev => !prev); /* toggle function actualiza el estado */

  function addToCart(item) { /* creamos una funcion intermedia para escribir elementos a nuestro carrito de compras */
    const itemExist = cart.findIndex(shoes => shoes.id === item.id) /* verificamos si existe un elemento con finIndex (no mutable) crea un objeto temporal (puede llamarse como sea, en este caso "shoes"*/
    /* si no existe en nuestro state retorna -1 con el metodo findIndex */
    if (itemExist >= 0) {  /* condicion para si el elemento ya existe  */
      const updateCart = [...cart] /* creamos una variable que es una copia del nuestro state cart" usando spread...operator */
      updateCart[itemExist].quantity++ /* modificamos la copia del state  */
      setCart(updateCart) /* actualizamos el state de la copia */

    }
    else {
      item.quantity = 1 /* agregamos propiedad nueva al objeto *item* */
      setCart([...cart, item]) /* crea un nuevo array en el viejo cart mas el nuevo item */
    }
  }

  return (
    <>

      <div className='header'>
        <Header toggleCart={toggleCart} /> {/* pasamos como prop la variable toggle */}
        <Cart
          open={open} /* pasamos como prop la variable de estado */
          cart={cart} /> {/* vamos a sincronizar nuestos arrays a la tabla con nuestro state osea nuestro STATE *cart* */}
      </div>


      <div className='target-container'>
        {data.map((shoes) => ( /* se recorre un array y a cada objeto se le asigna el nombre de shoes */
          <Target
            key={shoes.id}
            shoes={shoes} /* nombreDelProp={parametros del objeto} */
            setCart={setCart} /* pasamos como prop la funcion setCart */
            addToCart={addToCart} /* pasamos como prop esa funcion intermedia al componente y tendra la funcionalidad de esa funcion "addToCart" */
          />
        ))}
      </div>



    </>
  )
}

export default App
