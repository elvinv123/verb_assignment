import React from 'react';
import { Link } from 'react-router-dom';
import '../../styling/cart';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: props.cartItems,
        }
        this.handleRemoveCart = this.handleRemoveCart.bind(this);
        this.handleAddCart = this.handleAddCart.bind(this);
    }


    handleRemoveCart(product){
        let cart = this.state.cart
        let index = cart.findIndex(function (item) {
            return item.id == product.id
        });
        if (index > -1) {
            cart.splice(index, 1);
        }
        this.props.removeItem(product)
        this.setState({cart})
    }

    handleAddCart(product) {
        this.props.addToCart(product)
        let cart = [...this.state.cart, product]
        this.setState({ cart })
    }

    calculateSubTotal(){
        const cart = JSON.parse(localStorage.getItem('cart'));
        let total = 0;
        cart.forEach(item => {
            if (item.onSale == 0) {
                total += parseFloat(item.price.replace(/\$|,/g, ''))
            } else {
                const newPrice = parseFloat(item.price.replace(/\$|,/g, '')) - (parseFloat(item.price.replace(/\$|,/g, '')) * item.onSale * .01)
                total += newPrice
            }
        })
        return Math.round(total*100)/100;
    }

    calculateTax(){
        const subTotal = this.calculateSubTotal();
        const tax = subTotal*.0625;
        return Math.round(tax * 100) / 100;
    }

    calculateTotal() {
        const subTotal = this.calculateSubTotal();
        const tax = this.calculateTax();
        const total = subTotal + tax + 3;
        return Math.round(total * 100) / 100;
    }

    onSale(item){
        let total =0;
        if (item.onSale == 0) {
            total += parseFloat(item.price.replace(/\$|,/g, ''))
        } else {
            const newPrice = parseFloat(item.price.replace(/\$|,/g, '')) - (parseFloat(item.price.replace(/\$|,/g, '')) * item.onSale * .01)
            total += newPrice
        }
        return Math.round(total * 100) / 100;
    }

    render() {
        let cart = this.state.cart;
        let itemCount = {};
        
        const products = cart.map(item =>{
            const quantity = cart.filter((v) => (v.id === item.id)).length
            if (itemCount[item.name] == 1) return false;
            if (!itemCount[item.name]) itemCount[item.name] = 1;
               return <>
                    <div className="cart_item" key={item.id}>
                            <img src={item.images[0]}></img>
                            <section className="cart_item_info">
                                <h2>{item.name}</h2>
                            </section>
                            <section className="cart_item_price">
                                <p>${this.onSale(item)}</p>
                                <div className="quantity">
                                    <i class="fa fa-minus-circle" aria-hidden="true" onClick={() => this.handleRemoveCart(item)}></i>
                                    <p>{quantity}</p>
                                    <i class="fa fa-plus-circle" aria-hidden="true" onClick={() => this.handleAddCart(item)}></i>
                                </div>
                                
                            </section>
                    </div>
                </>
            }
        )
        const orderTotal = (<div className="order_total_container">
            <section className="order_total">
                <div>
                    <p>Subtotal:</p>
                    <p>Est. Shipping:</p>
                    <p>Sales Tax (6.25%):</p>
                    <p>Total:</p>
                </div>
                <div className="total">
                    <p>${this.calculateSubTotal()}</p>
                    <p>$3</p>
                    <p>${this.calculateTax()}</p>
                    <p>${this.calculateTotal()}</p>
                    
                </div>
            </section>
            <Link to={`/order`}><div className="btn">Checkout</div></Link>
        </div>)
        const cartEmpty = <h2>Cart Empty</h2>;

        return (
            <div className="main_content_cart">
                <h2>Checkout</h2>
                <div>
                    <section className="cart_content">
                    {products} 
                    </section>
                    {cart.length > 0? orderTotal: cartEmpty}
                </div>
            </div>
        )
    }
}

export default Cart;