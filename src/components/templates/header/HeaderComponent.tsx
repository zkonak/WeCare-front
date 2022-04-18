import React from "react";
import { Link } from "react-router-dom";
import {
  Header,
  Logo,
  Ellipse1,
  We,
  Navigation,
  NavListsOfItmes,
  Item,
  NavListsOfItmesTwo,
  NavListsOfItmesThree,
  NavListsOfItmesFour,
  PimaryButton,
  Label,
} from "./Header.style";

const HeaderComponent = () => {
  return (
    <Header>
      <Logo>
        <Ellipse1 />
        <We>WE</We>
      </Logo>
      <Navigation>
        <NavListsOfItmes>
          <Item>
            {" "}
            <Link to="/">Accueil</Link>
          </Item>
        </NavListsOfItmes>
        <NavListsOfItmesTwo>
          <Item>
            {" "}
            <Link to="/">Profesionnels</Link>
          </Item>
        </NavListsOfItmesTwo>
        <NavListsOfItmesThree>
          <Item>
            {" "}
            <Link to="/">Services</Link>
          </Item>
        </NavListsOfItmesThree>
        <NavListsOfItmesFour>
          <Item>
            {" "}
            <Link to="/">Rechercher</Link>
          </Item>
        </NavListsOfItmesFour>
        <PimaryButton>
          <Label>
            {" "}
            <Link to="/authentification">Se connecter</Link>
          </Label>
        </PimaryButton>
      </Navigation>
    </Header>
  );
};

export default HeaderComponent;
