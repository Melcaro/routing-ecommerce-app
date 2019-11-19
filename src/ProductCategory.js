import React from 'react';
import { getProductCategory } from './getProductCategory';
import { getProductsInCatalogue } from './getProductsInCatalogue';
import get from 'lodash.get';
import { Link } from 'react-router-dom';
import {
  ResultsContainer,
  ProductContainer,
  ProductLink,
  ProductImageContainer,
  ProductImage,
  TextsContainer,
  ProductName,
  ProductPrice,
  BrandName,
} from './styles';

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
      <ResultsContainer>
        {this.state.productList.map(
          ({ id, image, price, section: brand, title }) => (
            <ProductContainer key={id}>
              <ProductLink to={`/products/${id}`}>
                <ProductImageContainer>
                  <ProductImage alt="product visual" src={image} />
                </ProductImageContainer>
                <TextsContainer>
                  <ProductName>{title}</ProductName>
                  <ProductPrice>{price}</ProductPrice>
                </TextsContainer>
                <BrandName>{brand}</BrandName>
              </ProductLink>
            </ProductContainer>
          )
        )}
      </ResultsContainer>
    );
  }
}
