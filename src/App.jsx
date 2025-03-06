import Header from './Components/Header' /* importancion de component */
import Target from './Components/Target'  /* importancion de component */
import { useState } from 'react'
import { db } from './data/db' /* importancion de db en forma de objeto{} */


function App() {
  const [data, setData] = useState(db) /* useState para actualizacion de base de datos */
  const [cart, setCart] = useState([]) /* UseState para actualizar un array vacio */

  return (
    <>
      <Header />

      <h1>THE NEW!</h1>

      <div className='target-container'>
        {data.map((shoes) => ( /* se recorre un array y a cada objeto se le asigna el nombre */
          <Target
            key={shoes.id}
            shoes={shoes} /* nombreDelProp={parametros del objeto} */
          />
        ))}
      </div>



    </>
  )
}

export default App
