export default function Cart() {
  return (

    <nav className={`cart ${open ? "show" : ""}`}>
      <div
        className="car-content"
      >

        <div id="carrito" className="table">
          <p className="text-cart">El carrito esta vacio</p>
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
              <tr> {/* fila 1  */}
                <td> {/* celda */}
                  <img className="img-item" src="./public/img/nike-green.jpg" alt="imagen guitarra" />
                </td>
                <td>SRV</td>
                <td className="price">
                  $299
                </td>
                <td className="buttons">
                  <button
                    type="button"
                    className="btn-dark"
                  >
                    -
                  </button>
                  1
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
            </tbody>
          </table>

          <p className="text-end">Total pagar: <span className="total-price">$899</span></p>
          <button className="btn-vaciar">Vaciar Carrito</button>
        </div>
      </div>
    </nav>

  )
}