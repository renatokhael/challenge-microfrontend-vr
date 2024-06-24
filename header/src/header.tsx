import styled, { createGlobalStyle } from "styled-components";
import logo from "./assets/logo.svg";
import checkout from "./assets/checkout.svg";
import React, { useState, useEffect } from "react";

import { useSharedContext } from "cards/shared-context";

const GlobalStyle = createGlobalStyle<{ isDrawerOpen: boolean }>`
  body {
    overflow: ${({ isDrawerOpen }) => (isDrawerOpen ? "hidden" : "auto")};
  }
`;

const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  width: 100%;
  height: 64px;
  background: #02d72f;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`;

const HeaderContent = styled.div`
  width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 22px;
`;

const CheckoutButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const Drawer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 450px;

  padding: 28px;
  height: 100%;
  background: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  z-index: 2;
  overflow-y: auto;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

const HeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #f5f5f5;
`;

const Title = styled.h2`
  color: #1b2126;
  font-size: 22px;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #00aa13;
  padding: 10px;
  margin: 10px 0;
  border-radius: 8px;
`;

const ItemDetails = styled.div`
  display: flex;
  align-items: center;
`;

const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const ItemTitle = styled.p`
  margin: 0;
`;

const ItemPrice = styled.p`
  margin: 0;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  border-top: 1px solid #f5f5f5;
`;

const Button = styled.button`
  background: #02d72f;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background: #218838;
  }
`;

const ButtonCancel = styled.button`
  color: #1b2126;
  font-weight: 700;
  padding: 10px 20px;
  border: none;
  background: transparent;
  cursor: pointer;
`;

export default function Header() {
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);
  const { cartItems } = useSharedContext();

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <GlobalStyle isDrawerOpen={isDrawerOpen} />
      <StyledHeader>
        <HeaderContent>
          <img src={logo} alt="logo vr" width="45" />
          <CheckoutButton onClick={toggleDrawer}>
            <img src={checkout} alt="checkout" width="50" />
          </CheckoutButton>
        </HeaderContent>
      </StyledHeader>
      <Overlay isOpen={isDrawerOpen} onClick={toggleDrawer} />
      <Drawer isOpen={isDrawerOpen}>
        <HeaderTop>
          <CloseButton onClick={toggleDrawer}>×</CloseButton>
        </HeaderTop>
        <HeaderTitle>
          <Title>Compras</Title>
          <span>{cartItems.length}</span>
        </HeaderTitle>
        {cartItems.map((item) => (
          <CartItem key={item.id}>
            <ItemDetails>
              <ItemImage src={item.thumbnail} alt={item.title} />
              <ItemTitle>{item.title}</ItemTitle>
            </ItemDetails>
            <ItemPrice>R$ {item.price.toFixed(2)}</ItemPrice>
          </CartItem>
        ))}
        <Footer>
          <Button>Concluir compras</Button>
          <ButtonCancel onClick={toggleDrawer}>Cancelar</ButtonCancel>
        </Footer>
      </Drawer>
    </>
  );
}
