import React, { Component } from 'react';
import { getProducts } from './services/getProducts';
import {
  ProductPage,
  ImageContainerInProductPage,
  ImageInProductPage,
  TextsContainerInProductPage,
  ProductInfos,
  BasketButton,
} from './styles';

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
        <ProductPage key={id}>
          <ImageContainerInProductPage>
            <ImageInProductPage alt="BUY ME :'(" src={image} />
          </ImageContainerInProductPage>
          <TextsContainerInProductPage>
            <ProductInfos brand>{brand}</ProductInfos>
            <ProductInfos product>{title}</ProductInfos>
            <ProductInfos price>{price} TVA incluse</ProductInfos>
            <BasketButton>AJOUTER AU PANIER</BasketButton>
          </TextsContainerInProductPage>
        </ProductPage>
      </div>
    );
  }
}
