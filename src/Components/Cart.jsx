export default function Cart({open, cart}) {

   // STATE DERIVADO
   const isEmpty = () => cart.length === 0
   
  return (

    <nav className={`cart ${open ? "show" : ""}`}>
      <div
        className="car-content"
      >

        <div id="carrito" className="table">
          {isEmpty() ?(
          <p className="text-cart">El carrito esta vacio</p>
          ) : (
          <table className="table-content">
            <thead> {/* encabezado  */}
              <tr> {/* fila del encabezado */}
                <th>Producto</th> {/* celda */}
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th></th>
              </tr>
            </thead>

            <tbody> {/* cuerpo de la tabla */}
              {cart.map(shoes => ( /* el objeto shoes existe e itera sobre nuestra tabla mostrando sus caracteristicas como img, price, etc. */

              <tr key={shoes.id}> {/* fila 1  */}
                <td> {/* celda */}
                  <img className="img-item" 
                  src={`/img/${shoes.image}.jpg`}
                  alt="imagen guitarra"
                  />

                </td>
                <td>{shoes.name}</td> {/* para hecer dinamico agregamos caracteristicas de nuestro objeto {shoes} */}
                <td className="price">
                 {shoes.price}
                </td>
                <td className="buttons">
                  <button
                    type="button"
                    className="btn-dark"
                  >
                    -
                  </button>
                  {shoes.quantity}
                  <button
                    type="button"
                    className="btn-dark"
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    className="btn-danger"
                    type="button"
                  >
                    X
                  </button>
                </td>
              </tr>

               ))}
               
            </tbody>
          </table>
          )}
          <p className="text-end">Total pagar: <span className="total-price">$899</span></p>
          <button className="btn-vaciar">Vaciar Carrito</button>
        </div>
      </div>
    </nav>

  )
}