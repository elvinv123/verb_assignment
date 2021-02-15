import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Index extends React.Component{
  constructor(props) {
    super(props);

    this.handleAddCart = this.handleAddCart.bind(this);
  }

  handleAddCart(product){
    this.props.addToCart(product);
  }

  render() {
    const products = this.props.items.map(item =>
      
        <div className="card" key={item.id}>
          <Link to={`/product/${item.id}`} style={{ textDecoration: 'none' }}>
            <div className="card_img">
              <img src={item.images[0]}></img>
            </div>
            <div className="card_header">
              <h2>{item.name}</h2>
              <p>{item.price}</p>
             
            </div>
          </Link>
        <div className="btn" onClick={this.handleAddCart(item)}>Add to Cart</div>
        </div>
      
    )
    return (
      <div className="main_content">
        {products}
      </div>
    )
  }
}

export default Index;