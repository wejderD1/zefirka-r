import { render, screen } from "@testing-library/react";
import Footer from "./footer";

describe("Footer component", () => {
  it("Footer renders", () => {
    render(<Footer />);
  
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    expect(screen.getByText(/Yurii/i)).toBeInTheDocument();
  });

  it("Footer snapshot", () => {
    const view = render(<Footer />);

    expect(view).toMatchSnapshot();
  })
})
