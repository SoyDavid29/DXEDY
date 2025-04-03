export default function Cart() {
  return (

    <nav className="car">
      <div
        className="car-content"
      >

        <div id="carrito" className="table">
          <p className="text-cart">El carrito esta vacio</p>
          <table className="table-content">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img className="img-item" src="./public/img/guitarra_02.jpg" alt="imagen guitarra" />
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