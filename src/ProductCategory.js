import React from 'react';
import { getProductCategory } from './getProductCategory';
import { getProductsInCatalogue } from './getProductsInCatalogue';
import get from 'lodash.get';
import { Link } from 'react-router-dom';

// import './productCategory.css';

export class ProductCategory extends React.Component {
  state = {
    productList: [],
  };

  async componentDidMount() {
    const {
      props: {
        match: { url },
      },
    } = this;
    const path = url.replace(/\//g, '.').slice(1);
    const { data } = await getProductCategory();
    const catalogue = get(data, path);
    console.log(catalogue);

    const categoryProducts = getProductsInCatalogue(catalogue);
    console.log(categoryProducts);
    this.setState({
      productList: categoryProducts,
    });
  }

  render() {
    return (
      <div className="resultsContainer">
        {this.state.productList.map(
          ({ id, image, price, section: brand, title }) => (
            <div className="productContainer" key={id}>
              <Link className="productLink" to={`/products/${id}`}>
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
    );
  }
}
