import styled from "styled-components";
import { useEffect, useState } from "react";
import { productsApi } from "./api/productsApi";
import { Product } from "./models/IProduct";
import truncateTextFunction from "./utils/truncateTextFunction";
import { SharedContextProvider, useSharedContext } from "./shared-context";

const WrapperCards = styled.section`
  display: flex;
  margin-top: 120px;
  justify-content: center;
  align-items: center;
  height: 100vh - 120px;
`;

const Container = styled.div`
  margin: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

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
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  box-sizing: border-box;
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
  text-align: center;
  color: #1b2126;
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

const BuyButton = styled.button<{ added: boolean }>`
  background: ${({ added }) => (added ? "#F0F0F0" : "#02d72f")};
  color: ${({ added }) => (added ? "#121214" : "#fff")};
  font-weight: 700;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
`;

const PaginationContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: start;
`;

const PaginationButton = styled.button`
  color: #121214;
  margin: 0 5px;
  font-weight: 700;
  border: none;
  padding: 10px 20px;

  border-radius: 25px;
  cursor: pointer;
  &:disabled {
    background: #a0aab4;
    cursor: not-allowed;
  }
  &:hover:not(:disabled) {
    background: #a0aab4;
  }
`;

export default function Cards() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const { addToCart, removeFromCart } = useSharedContext();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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

  const handleBuy = (product: Product) => {
    if (!cartItems.some((item) => item.id === product.id)) {
      addToCart(product);
      setCartItems((prevItems) => [...prevItems, product]);
      alert(`O produto ${product.title} foi adicionado ao carrinho!`);
    }
  };

  const handleRemove = (product: Product) => {
    removeFromCart(product.id);
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== product.id)
    );
    alert(`O produto ${product.title} foi removido do carrinho!`);
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <SharedContextProvider>
      <WrapperCards>
        <Container>
          {currentItems.map((product) => {
            const isAdded = cartItems.some((item) => item.id === product.id);
            return (
              <ProductCard key={product.id}>
                <ProductImage>
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    width="100"
                  />
                </ProductImage>
                <ProductTitle>
                  {truncateTextFunction(product.title, 20)}
                </ProductTitle>
                <ProductDescription>
                  {truncateTextFunction(product.description, 60)}
                </ProductDescription>
                <ProductFooter>
                  <ProductPrice>{`R$ ${product.price.toFixed(
                    2
                  )}`}</ProductPrice>
                  <BuyButton
                    added={isAdded}
                    onClick={() =>
                      isAdded ? handleRemove(product) : handleBuy(product)
                    }
                  >
                    {isAdded ? "Remover" : "Adicionar"}
                  </BuyButton>
                </ProductFooter>
              </ProductCard>
            );
          })}
          <PaginationContainer>
            <PaginationButton onClick={prevPage} disabled={currentPage === 1}>
              Anterior
            </PaginationButton>
            <PaginationButton
              onClick={nextPage}
              disabled={
                currentPage === Math.ceil(products.length / itemsPerPage)
              }
            >
              Próximo
            </PaginationButton>
          </PaginationContainer>
        </Container>
      </WrapperCards>
    </SharedContextProvider>
  );
}
