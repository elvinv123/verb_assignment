import React from 'react';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let cart = this.props.cartItems
       

        const products = cart.map(item =>{
            let quantity = cart.filter((v) => (v === item)).length
               return <>
                    <div className="card" key={item.id}>
                        <Link to={`/product/${item.id}`} style={{ textDecoration: 'none' }}>
                            <section className="cart_item_img">
                                <img src={item.images[0]}></img>
                            </section>
                            <section className="cart_item_info">
                                <h2>{item.name}</h2>
                            </section>
                            <section className="cart_item_price">
                                <h2>{item.name}</h2>
                                <p>{item.price}</p>
                               <p>{quantity}</p>
                            </section>
                        </Link>
                    </div>
                </>
            }
        )
        return (
            <div className="main_content">
                {products}
            </div>
        )
    }
}

export default Cart;