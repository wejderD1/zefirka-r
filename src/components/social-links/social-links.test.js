import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SocialLinks from "./social-links";

const linksList = [
  {
    name: "facebook",
    url: "https://www.facebook.com/groups/748009266201827/",
  },
  {
    name: "instagram",
    url: "https://www.facebook.com/groups/748009266201827/",
  },
  {
    name: "tiktok",
    url: "https://www.facebook.com/groups/748009266201827/",
  },
];
describe("SocialLinks component", () => {
  beforeEach(() => {
    render(<SocialLinks />); //act
  });

  it("SocialLinks renders", () => {
    const links = screen.getAllByRole("link"); //arrange

    expect(links).toHaveLength(3); //assert

    links.forEach((link) => expect(link).toBeInTheDocument()); //assert
  });

  linksList.forEach((item) => {
    it(`renders ${item.name} links with correct atribute`, () => {
      const link = screen.getAllByLabelText(`${item.name}`)[0];

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("class", "social-links");
      expect(link).toHaveAttribute("href", `${item.url}`);
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
      expect(link).toHaveAttribute("target", "_blank");
    });
  });

  it("link click correct", async() => {
    const facebookLink = screen.getAllByLabelText(/facebook/i)[0];
    await userEvent.click(facebookLink);

    expect(facebookLink).toHaveAttribute("href", "https://www.facebook.com/groups/748009266201827/");
  })
});
