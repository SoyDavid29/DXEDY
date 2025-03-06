export default function Target({ shoes }) {

    const { id, name, image, description, price } = shoes

    return (
        
            <div className="target">
                <img className="img-shoes" src={`/img/${image}.jpg`} alt="nike photo" />
                <h1>{name}</h1>
                <p>Details</p>

                <div className="price">
                    <p>{price} mxn</p>
                    <button className="btn-cart"><img className="car-logo" src="/img/car.png" alt="" /></button>
                </div>
            </div>

    )
}