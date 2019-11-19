import React from 'react';
import { Link } from 'react-router-dom';
import zalandoLogo from './zalandoLogo.png';
import {
  HeaderStyle,
  MenuList,
  MenuItem,
  LogoContainer,
  ImgInContainer,
} from './styles';

export const Header = () => {
  return (
    <HeaderStyle>
      <MenuList>
        <Link className="linkToCategory " to={`/femme`}>
          <MenuItem>FEMME</MenuItem>
        </Link>
        <Link to={'/homme'}>
          <MenuItem>HOMME</MenuItem>
        </Link>
        <Link to={'/enfant'}>
          <MenuItem>ENFANT</MenuItem>
        </Link>
      </MenuList>
      <LogoContainer>
        <Link to={'/'}>
          <ImgInContainer alt="brandLogo" src={zalandoLogo} />
        </Link>
      </LogoContainer>
    </HeaderStyle>
  );
};
