import React from 'react';
import '../../styling/order.scss';

class OrderConfirmation extends React.Component {

    calculateTotalDiscount(){
        const cart = JSON.parse(localStorage.getItem('cart'));
        let total = 0;
        cart.forEach(item => {
            if (item.onSale != 0) {
                const newPrice = (parseFloat(item.price.replace(/\$|,/g, '')) * item.onSale * .01)
                total += newPrice
            }
        })
        return Math.round(total * 100) / 100;
    }

    calculateSubTotal() {
        const cart = JSON.parse(localStorage.getItem('cart'));
        let total = 0;
        cart.forEach(item => {
                total += parseFloat(item.price.replace(/\$|,/g, ''))
        })
        return Math.round(total * 100) / 100;
    }

    calculateTax() {
        const total = this.calculateSubTotal() - this.calculateTotalDiscount();
        const tax = total * .0625;
        return Math.round(tax * 100) / 100;
    }

    calculateTotal() {
        const subTotal = this.calculateSubTotal();
        const tax = this.calculateTax();
        const discounts = this.calculateTotalDiscount();
        const total = subTotal + tax + 3 - discounts;
        return Math.round(total * 100) / 100;
    }

    onSale(item) {
        let total = 0;
        if (item.onSale == 0) {
            total += parseFloat(item.price.replace(/\$|,/g, ''))
        } else {
            const newPrice = parseFloat(item.price.replace(/\$|,/g, '')) - (parseFloat(item.price.replace(/\$|,/g, '')) * item.onSale * .01)
            total += newPrice
        }
        return Math.round(total * 100) / 100;
    }

    render(){
        let cart = JSON.parse(localStorage.getItem('cart'));
        let itemCount = {};

        const products = cart.map(item => {
            const quantity = cart.filter((v) => (v.id === item.id)).length
            if (itemCount[item.name] == 1) return false;
            if (!itemCount[item.name]) itemCount[item.name] = 1;
            return <>
                <div className="order_item" key={item.id}>
                    <img src={item.images[0]}></img>
                    <section className="order_item_info">
                        <h2>{item.name}</h2>
                    </section>  
                    <p>x{quantity}</p>
                    <section className="order_item_price">
                        <p>{item.price}</p>
                      

                    </section>
                </div>
            </>
        }
        )

        return (
            <div className="main_content_confirmation">
                <h1>Order Total</h1>
                    {products}
                <section className="confirmation_total">
                    <div>
                        <p>Subtotal:</p>
                        <p>Discounts:</p>
                        <p>Est. Shipping:</p>
                        <p>Sales Tax (6.25%):</p>
                        <p>Total:</p>
                    </div>
                    <div className="total">
                        <p>${this.calculateSubTotal()}</p>
                        <p>-${this.calculateTotalDiscount()}</p>
                        <p>$3</p>
                        <p>${this.calculateTax()}</p>
                        <p>${this.calculateTotal()}</p>
                    </div>
                </section>
            </div>
        )
    }
}

export default OrderConfirmation;