import styled from 'styled-components';
import { Link } from 'react-router-dom';

// HEADER STYLES

const HeaderStyle = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1%;
`;

const MenuList = styled.ul`
  flex: 0 1 20%;
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

const MenuItem = styled.li`
  flex: 1 0 5%;
  margin: 0 10%;
  font-size: 15px;
  font-style: none;
`;

const LogoContainer = styled.div`
  flex: 0 1 20%;
`;

const ImgInContainer = styled.img`
  width: 40%;
`;

// HOME PAGE & PRODUCTS CATEGORY

const HomeTitle = styled.h1`
  text-align: center;
`;

const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
`;
const ProductContainer = styled.div`
  flex: 1 0 25%;
  display: flex;
  flex-direction: column;
  margin: 2%;
`;

const ProductLink = styled(Link)`
  text-decoration: none;
`;

const ProductImageContainer = styled.div`
  flex: 1 1 auto;
  width: 100%;
`;

const ProductImage = styled.img`
  width: 100%;
`;

const TextsContainer = styled.div`
  flex: 1 1 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: black;
`;

const ProductName = styled.span`
  flex: 1 1 85%;
  font-size: 12px;
  font-weight: bold;
`;

const ProductPrice = styled.span`
  flex: 1 1 auto;
  font-size: 12px;
`;

const BrandName = styled.p`
  flex: 1 1 5%;
  font-size: 12px;
  margin-top: 0;
  color: black;
`;

// PRODUCT

const ProductPage = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
`;

const ImageContainerInProductPage = styled.div`
  flex: 0 0 35%;
  margin-left: 3%;
`;

const ImageInProductPage = styled.img`
  width: 100%;
`;

const TextsContainerInProductPage = styled.div`
  margin-right: 5%;
  flex: 0 0 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ProductInfos = styled.span`
  flex: 0 0 5%;
  font-weight: bold;
  font-size: 15px;
  margin: ${props => (props.product ? '10% 0' : '0')};
  font-size: ${props => (props.brand ? '12px' : 'inherit')};
`;

const BasketButton = styled.button`
  flex: 0 0 5%;
  width: 60%;
  margin-top: 10%;
  color: white;
  background-color: #f66c00;
  border: none;
  font-size: 12px;
`;

export {
  HeaderStyle,
  MenuList,
  MenuItem,
  LogoContainer,
  ImgInContainer,
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
  ProductPage,
  ImageContainerInProductPage,
  ImageInProductPage,
  TextsContainerInProductPage,
  ProductInfos,
  BasketButton,
};
