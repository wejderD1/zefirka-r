import { render, screen } from "@testing-library/react";
import InformationBlock from "./information-block";

/**ARANGE */
let title = "Information block";
const testImg = "404.jpg";
const description = "information description";

const renderInformmationBlock = (classOther = "") => {
  return render(
    <InformationBlock
      title={title}
      img={testImg}
      description={description}
      classOther={classOther}
    />
  );
};

describe("information-block component", () => {
  it("render information-block", () => {
    renderInformmationBlock();
    const label = screen.getByText(/Information block/i);
    expect(label).toBeInTheDocument();
  });

  describe("title testing", () => {
    it("render title correctly", () => {
      renderInformmationBlock();

      const title = screen.getByText(/Information block/i);
      expect(title).toBeInTheDocument();
    });

    it("renders default behavior when title is missing", () => {
      render(
        <InformationBlock
          img={testImg}
          description={description}
          classOther=""
        />
      );

      const title = screen.getByRole("heading", {level: 1});

      expect(title).toBeEmptyDOMElement();
    });

    it("render title with the correct CSS class", () => {
      const {container} = renderInformmationBlock();

      const title = container.querySelector("h1");
      expect(title).toHaveClass("subtitle subtitle_bottom-line information__title");
    })
  });

  describe("description testing", () => {
    it("render description correctly", () => {
      renderInformmationBlock();

      const description = screen.getByText(/information description/i);
      expect(description).toBeInTheDocument();
    });

    it("renders default behavior when description is missing", () => {
      render(
        <InformationBlock
          img={testImg}
          title={title}
          classOther=""
        />
      );

      const description = screen.getByRole("heading", {level: 2});

      expect(description).toBeEmptyDOMElement();
    });

    it("render description with correct CSS class", () => {
      const {container} = renderInformmationBlock();

      const desc = container.querySelector("h2");
      expect(desc).toHaveClass("main-text information__text");
    })
  });

  it("information-block not have classOther", () => {
    const { container } = renderInformmationBlock();

    const informationBlock = container.querySelector(".information");
    expect(informationBlock).not.toHaveClass("other");
  });

  it("information-block with classOther", () => {
    const className = "other";
    const { container } = renderInformmationBlock(className);

    const informationBlock = container.querySelector(".information");

    expect(informationBlock).toHaveClass("other");
  });

  it("render children component correctly", () => {
    const childrenComponent = <h1>Test children</h1>;
    render(
      <InformationBlock
        title={title}
        img={testImg}
        description={description}
        classOther=""
      >
        {childrenComponent}
      </InformationBlock>
    );
    expect(screen.getByText(/Test children/i)).toBeInTheDocument();
  });
});
