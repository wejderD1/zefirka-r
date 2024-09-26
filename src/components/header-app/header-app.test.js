import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HeaderApp from "./header-app";

describe("HeaderApp component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <HeaderApp />
      </MemoryRouter>
    );
  });

  it("HeaderApp render", () => {
    const header = screen.getByLabelText(/header-nav/i);
    expect(header).toBeInTheDocument();

    const logo = screen.getByLabelText(/zefirka logo/i);
    expect(logo).toBeInTheDocument();
  });

  it("render correct navigation links", () => {
    const home = screen.getByText(/strona gołówna/i);
    const products = screen.getByText(/produkty/i);
    const contact = screen.getByText(/kontakt/i);

    expect(home).toBeInTheDocument();
    expect(products).toBeInTheDocument();
    expect(contact).toBeInTheDocument();
  });
});
