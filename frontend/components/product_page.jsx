import React from 'react';
import '../../styling/product_page.scss';

class ProductPage extends React.Component {
    constructor(props) {
        super(props);
    }

    price(){
        const productId = this.props.match.params.id;
        const product = this.props.items.filter(item => item.id == productId)[0]
        let priceElement = ""

        if(product.onSale == 0){
            priceElement = <p>{product.price}</p>  
        }else{
            const newPrice = parseFloat(product.price.replace(/\$|,/g, '')) - (parseFloat(product.price.replace(/\$|,/g, ''))*product.onSale * .01)
            priceElement = (<>
                                <p className="newPrice">${newPrice}</p>
                                <p className="sale">{product.price}(Sale - Save {product.onSale}%)</p>
                                <p className="sale">SKU: {product.sku}</p>
                            </>
                             )
        }
        
        return(
            <div>
                <p>{product.name}</p>
                {priceElement}
                <div className="btn" onClick={() => this.props.addToCart(product)}>Add to Cart</div>
            </div>)
        
    }


    render() {
        const productId = this.props.match.params.id;
        const product = this.props.items.filter(item => item.id == productId)[0]
        return (
            <div className="main_content_product">
                <div className="product_card">
                    
                    <section className="product_card_top">
                        <img src={product.images[0]}/>
                            {this.price()}
                    </section>
                    <section className="product_card_bottom">
                        <h2>Product Details</h2>
                        <p>{product.description}</p>
                    </section>
                </div>
            </div>
        )
    }
}

export default ProductPage;