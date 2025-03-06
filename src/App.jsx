import Header from './Components/Header'
import Target from './Components/Target'
import { useState } from 'react'
import {db} from './data/db'


function App() {
   const [data, setData] = useState(db)
   const [cart, setCart] = useState([]) 

  return (
    <>
       <Header/>

        <h1>THE NEW!</h1>
        
       <div className='target-container'>
       {data.map((shoes) => (
          <Target
          key={shoes.id}
          shoes={shoes}
          />
        ))}
       </div>
     
  
       
    </>
  )
}

export default App
