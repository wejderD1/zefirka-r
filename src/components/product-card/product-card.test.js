import { screen, render } from "@testing-library/react";
import ProductCard from "./product-card";
import { useDispatch } from "react-redux";
import { selectedProduct } from "../../actions/productAction";
import { MemoryRouter } from "react-router-dom";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn()
}));

jest.mock("../../actions/productAction.js", () => ({
  selectedProduct: jest.fn()
}));

jest.mock("../../../src/assets/images/products_img/no-image-available.webp", () => "mocked-image-path.jpg");

const title = "product title";
const desc = "product desc";
const price = 100;
const img = "no-image-available.webp";
const id = "1";
//{ title, desc, price, img, id }


describe("ProductCard component", () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    // Mock dispatch to return the mockDispatch function
    useDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should mock the image", () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <ProductCard title={title} desc={desc} price={price} img={img} id={id}></ProductCard>
      </MemoryRouter>
    );
  
    const image = getByAltText("product img");
    expect(image.src).toContain("mocked-image-path.jpg");
  });

  it("ProductCard render correct", () => {
    render(
      <MemoryRouter>
        <ProductCard title={title} desc={desc} price={price} img={img} id={id} />
      </MemoryRouter>
    );

    expect(screen.getByText(/product title/i)).toBeInTheDocument();

    expect(screen.getByText(/product desc/i)).toBeInTheDocument();

    expect(screen.getByText(/100/i)).toBeInTheDocument();

    const cardLink = screen.getByLabelText(/card-link/i);
    expect(cardLink).toBeInTheDocument();
  });
});
