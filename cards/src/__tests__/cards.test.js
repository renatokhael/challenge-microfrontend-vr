import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import Cards from "../cards";
import { productsApi } from "../api/productsApi";
import { SharedContextProvider } from "./shared-context";
import truncateTextFunction from "./utils/truncateTextFunction";

jest.mock("./api/productsApi", () => ({
  productsApi: {
    getProducts: jest.fn(() =>
      Promise.resolve({ data: { products: mockProducts } })
    ),
  },
}));

const mockProducts = [
  {
    id: 1,
    title: "Product 1 Title Long Enough To Be Truncated",
    description:
      "Product 1 description that is also long enough for testing truncation.",
    price: 19.99,
    thumbnail: "product1.jpg",
  },
  {
    id: 2,
    title: "Product 2",
    description: "Short product 2 description.",
    price: 9.99,
    thumbnail: "product2.jpg",
  },
];

describe("Cards Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders product cards correctly", async () => {
    render(
      <SharedContextProvider>
        <Cards />
      </SharedContextProvider>
    );

    await waitFor(() => {
      mockProducts.forEach((product) => {
        expect(
          screen.getByText(truncateTextFunction(product.title, 20))
        ).toBeInTheDocument();
        expect(
          screen.getByText(truncateTextFunction(product.description, 60))
        ).toBeInTheDocument();
        expect(
          screen.getByText(`R$ ${product.price.toFixed(2)}`)
        ).toBeInTheDocument();
      });
    });
  });

  test("adds and removes products from cart", async () => {
    const addToCart = jest.fn();
    const removeFromCart = jest.fn();
    render(
      <SharedContextProvider value={{ addToCart, removeFromCart }}>
        <Cards />
      </SharedContextProvider>
    );

    await waitFor(() => screen.findAllByText("Adicionar"));

    fireEvent.click(screen.getAllByText("Adicionar")[0]);
    expect(addToCart).toHaveBeenCalledWith(mockProducts[0]);
    expect(screen.getAllByText("Remover")[0]).toBeInTheDocument();

    fireEvent.click(screen.getAllByText("Remover")[0]);
    expect(removeFromCart).toHaveBeenCalledWith(mockProducts[0].id);
    expect(screen.getAllByText("Adicionar")[0]).toBeInTheDocument();
  });

  test("pagination works as expected", async () => {
    render(
      <SharedContextProvider>
        <Cards />
      </SharedContextProvider>
    );

    await waitFor(() => {
      mockProducts.slice(0, 6).forEach((product) => {
        expect(
          screen.getByText(truncateTextFunction(product.title, 20))
        ).toBeInTheDocument();
      });
    });

    fireEvent.click(screen.getByText("Próximo"));

    await waitFor(() => {
      mockProducts.slice(6).forEach((product) => {
        expect(
          screen.getByText(truncateTextFunction(product.title, 20))
        ).toBeInTheDocument();
      });
    });
  });
});
