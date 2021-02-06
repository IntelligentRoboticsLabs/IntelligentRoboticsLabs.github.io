import React, {FunctionComponent} from "react";
import {Nav, NavContainer, NavLink, NavMenu, NavMenuItem, NavWrapper, SearchContainer} from "./style";
import {MenuItem} from "@nehalist/gatsby-theme-nehalem/src/utils/models";
import {Search} from "@nehalist/gatsby-theme-nehalem/src/components/search";

interface NavigationProps {
  title: string;
  menu: MenuItem[];
  showSearch: boolean;
  dark?: boolean;
}

function mouseOverEvent(e) {
  e.target.style.color = 'red';
  console.log(e);
}
function mouseOutEvent(e) {
  e.target.style.color = 'white';
}

const Navigation: FunctionComponent<NavigationProps> = ({title, menu, dark = false, showSearch = true}) => (
  <NavContainer dark={dark}>
    <Nav>
      <NavWrapper>
        <NavMenu mobile={true}>
          {menu.map((item, index) => (
            <NavMenuItem key={index}>
              <NavLink onMouseOver={mouseOverEvent} onMouseOut={mouseOutEvent} to={item.path} key={index}>{item.name}</NavLink>
            </NavMenuItem>
          ))}
        </NavMenu>
        <SearchContainer>
          {showSearch &&
          <NavMenu>
              <Search/>
          </NavMenu>
          }
        </SearchContainer>
      </NavWrapper>
    </Nav>
  </NavContainer>
);

export default Navigation;
