export default function Header({toggleCart}) { /* toggleCart llama a la funcion cuando el icono es cliqueado  */
  

    return (



        <header className="sidebar">
            <div className="bar">
                <h1 className="logo">DxEdyShoes</h1>
                <li className="menu-links">
                    <ul className="main-link" >Social Media</ul>
                    <ul className="main-link" >About Us</ul>
                    <ul className="main-link" >Brands</ul>

                    <button className="btn-cart">
                     <img className="car-logo" src="/img/car.png" alt="" 
                     onClick={toggleCart}/>
                    </button>
                </li>

            </div>
        </header>
    )
}