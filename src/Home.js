import React from 'react';
import { getProducts } from './services/getProducts';
import {
  HomeTitle,
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
        <HomeTitle>E-COMMERCE APP</HomeTitle>
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
      </div>
    );
  }
}
