import { useState } from "react";

export default function Target({ shoes }) {  /* aplicamos destructuring del objeto */

    const [visible, setVisible] = useState(false); /* Declaracion de estado */
    
 
    const { id, name, image, description, price } = shoes /* parametros que estraemos del objeto */

    const handleClick = (id) => {  /* Definimos funcion para el boton del carrito */
       console.log('diste click', id)
    }

    return (

        <div className="target">
            <img className="img-shoes" src={`/img/${image}.jpg`} alt="nike photo" />
            <h1>{name}</h1>

            <div className="detail-container">
                <button 
                    className="detail"
                    onClick={() => setVisible(!visible)}
                >
                    Details
                </button>

                {/* Apply conditional class for visibility */}
                <p className={`details-text ${visible ? "show" : ""}`}>
                    {description}
                </p>

            </div>
    

            <div className="price">
                <p>{price} mxn</p>

                <button 
                   type="button"
                   className="btn-cart"
                   onClick= { () => handleClick (shoes)}
                   >
                    <img className="car-logo" src="/img/car.png" alt="" />
            
                </button>

            </div>

        </div>

    )
}
