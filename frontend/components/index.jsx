import React from 'react';

class Index extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.items[0])
    const products = this.props.items.map(item =>
      <div className="card" key={item.id}>
        <div className="card_img">
          <img src={item.images[0]}></img>
        </div>
        <div className="card_header">
          <h2>{item.name}</h2>
          <p>{item.price}</p>
          <div className="btn">Add to Cart</div>
        </div>
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