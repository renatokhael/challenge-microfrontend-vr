import styled from "styled-components";
import { useEffect, useState } from "react";
import { productsApi } from "./api/productsApi";
import { Product } from "./models/IProduct";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled.div`
  border: 1px solid #a0aab4;
  border-radius: 8px;
  padding: 20px;

  max-width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductImage = styled.div`
  width: 100px;
  height: 100px;
  background: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

const ProductTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

const ProductDescription = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-bottom: 16px;
`;

const ProductFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const BuyButton = styled.button`
  background: #02d72f;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  &:hover {
    background: #218838;
  }
`;

export default function Cards() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    productsApi
      .getProducts()
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  return (
    <Container>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ProductImage>
            <img src={product.thumbnail} alt={product.title} width="100" />
          </ProductImage>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductDescription>{product.description}</ProductDescription>
          <ProductFooter>
            <ProductPrice>{`R$ ${product.price.toFixed(2)}`}</ProductPrice>
            <BuyButton>Comprar</BuyButton>
          </ProductFooter>
        </ProductCard>
      ))}
    </Container>
  );
}
