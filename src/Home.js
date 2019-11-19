import React from 'react';
import { getProducts } from './services/getProducts';
import './home.css';
import { Link } from 'react-router-dom';

export class Home extends React.Component {
  state = {
    productList: [],
  };

  async componentDidMount() {
    const { data } = await getProducts();
    this.setState({
      productList: data,
    });
  }

  render() {
    return (
      <div>
        <h1 className="homeTitle">E-COMMERCE APP</h1>
        <div className="resultsContainer">
          {this.state.productList.map(
            ({ id, image, price, section: brand, title }) => (
              <div className="productContainer" key={id}>
                <Link className="productLink" to={`/product/${id}`}>
                  <div className="productImage">
                    <img alt="product visual" src={image} />
                  </div>
                  <div className="textsContainer">
                    <span className="productName">{title}</span>
                    <span className="productPrice">{price}</span>
                  </div>
                  <p className="brandName">{brand}</p>
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}
