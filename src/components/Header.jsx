import React , {useState} from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [menuOpen , menuClose]=useState(false);
  return (
    <Container>
      <a>
        <img src="/Images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomeMenu onClick={()=> menuClose(true)} />
      </RightMenu>
      <BurgerNav className="example" show={menuOpen}>
        <Closewrapper>
          <Customclose onClick={()=> menuClose(false)} />
        </Closewrapper>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Power Wall</a>
        </li>
        <li>
          <a href="#">Commercial Energy</a>
        </li>
        <li>
          <a href="#">Utitlities</a>
        </li>
        <li>
          <a href="#">Test Drives</a>
        </li>
      </BurgerNav>
    </Container>
  );
}
export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600px;
    text-transform: uppercase;
    padding: 0 20px;
    flex-wrap: no-wrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  a {
    font-weight: 600px;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;
const CustomeMenu = styled(MenuIcon)``;
const Customclose = styled(CloseIcon)` cursor:pointer;`;

const BurgerNav = styled.div`
  position: fixed;
  width: 300px;
  z-index: 16;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  list-style: none;
  padding: 20px;
  display: flex;
  text-align: start;
  flex-direction: column;
  transform:${props=>props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition:transform 0.2s ;
  Overflow-y:scroll;
  li {
    padding: 15px 0;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
  

`;
const Closewrapper = styled.div`
display:flex;
justify-content:flex-end;
`
