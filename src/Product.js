import React, { Component } from 'react';
import { getProducts } from './services/getProducts';

import './product.css';

export class Product extends Component {
  state = {
    productInfo: {},
  };

  async componentDidMount() {
    const {
      props: {
        match: {
          params: { productId },
        },
      },
    } = this;
    const { data } = await getProducts();
    this.setState(
      {
        productInfo: data.find(({ id }) => id === productId),
      },
      () => console.log(this.state)
    );
  }

  render() {
    const {
      productInfo: { image, section: brand, title, id, price },
    } = this.state;
    return (
      <div>
        <div className="productPage" key={id}>
          <div className="productImage">
            <img alt="BUY ME :'(" src={image} />
          </div>
          <div className="textsContainer">
            <span className="brandName">{brand}</span>
            <span className="productName">{title}</span>
            <span className="productPrice">{price} TVA incluse</span>
            <button className="basketButton">AJOUTER AU PANIER</button>
          </div>
        </div>
      </div>
    );
  }
}
