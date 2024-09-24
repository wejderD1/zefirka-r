import { render, screen, fireEvent } from "@testing-library/react";
import BurgerMenu from "./burger-menu";
import { BrowserRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // для мокирования

jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: jest.fn(() => <svg data-testid="mock-icon" />) // мокируем иконку SVG
}));

const mobileWidth = 760;

const resizeToMobileDesktop = () => {
  window.innerWidth = mobileWidth;
  window.dispatchEvent(new Event("resize"));
};

describe("BurgerMenu component", () => {
  const renderWithRouter = (ui) => {
    return render(<BrowserRouter>{ui}</BrowserRouter>);
  };

//   it("renders the FontAwesomeIcon burger icon", () => {
//     resizeToMobileDesktop();
//     renderWithRouter(<BurgerMenu />);
//     console.log(screen.debug());
    
//     // Проверяем, что иконка рендерится
//     const icon = screen.getByTestId("mock-icon");
//     expect(icon).toBeInTheDocument();
//   });

    it("does not display the menu initially", () => {
      renderWithRouter(<BurgerMenu />);

      // Меню не должно отображаться по умолчанию
      const menu = screen.queryByRole("list");
      expect(menu).not.toBeInTheDocument();
    });

  //   it("displays the menu after clicking the burger icon", () => {
  //     renderWithRouter(<BurgerMenu />);

  //     // Находим иконку и кликаем по ней
  //     const icon = screen.getByTestId("mock-icon");
  //     fireEvent.click(icon);

  //     // Проверяем, что меню теперь отображается
  //     const menu = screen.getByRole("list");
  //     expect(menu).toBeInTheDocument();
  //   });

  //   it("renders correct links when the menu is open", () => {
  //     renderWithRouter(<BurgerMenu />);

  //     // Открываем меню
  //     const icon = screen.getByTestId("mock-icon");
  //     fireEvent.click(icon);

  //     // Проверяем, что ссылки рендерятся
  //     const homeLink = screen.getByText(/strona gołówna/i);
  //     const productsLink = screen.getByText(/produkty/i);
  //     const contactLink = screen.getByText(/kontakt/i);
  //     const adminLink = screen.getByText(/admin/i);

  //     expect(homeLink).toBeInTheDocument();
  //     expect(productsLink).toBeInTheDocument();
  //     expect(contactLink).toBeInTheDocument();
  //     expect(adminLink).toBeInTheDocument();
  //   });

  //   it("toggles menu visibility when clicking the burger icon multiple times", () => {
  //     renderWithRouter(<BurgerMenu />);

  //     const icon = screen.getByTestId("mock-icon");

  //     // Первый клик - открытие меню
  //     fireEvent.click(icon);
  //     expect(screen.getByRole("list")).toBeInTheDocument();

  //     // Второй клик - закрытие меню
  //     fireEvent.click(icon);
  //     const menu = screen.queryByRole("list");
  //     expect(menu).not.toBeInTheDocument();
  //   });
});
