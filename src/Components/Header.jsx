export default function Header() {
    return (



        <header className="sidebar">
            <div className="bar">
                <h1 className="logo">DxEdyShoes</h1>
                <li className="menu-links">
                    <ul className="main-link" >Social Media</ul>
                    <ul className="main-link" >About Us</ul>
                    <ul className="main-link" >Brands</ul>
                    <button className="btn-cart"
                     >
                     <img className="car-logo" src="/img/car.png" alt="" />
                    </button>
                </li>

            </div>
        </header>
    )
}