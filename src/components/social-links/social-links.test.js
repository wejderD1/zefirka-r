import { render, screen } from "@testing-library/react";
import SocialLinks from "./social-links";

describe("SocialLinks component", () => {
  it("SocialLinks renders", () => {
    render(<SocialLinks />); //act

    const links = screen.getAllByRole("link"); //arrange

    expect(links).toHaveLength(3); //assert

    links.forEach((link) => expect(link).toBeInTheDocument()); //assert
  });
});
