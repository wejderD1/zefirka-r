import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { useDispatch, useSelector } from "react-redux";
import { useHttp } from "../../services/http.hooks";
import UserCounter from "./userCounter";

jest.mock("../../services/http.hooks");

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

/**
 * Arrange
 * Act
 * Assert
 */

describe("UserCounter component", () => {
  beforeEach(() => {
    //Мокаю useSelector и возвращаю обьект count: 0
    useSelector.mockReturnValue({ count: 0 });
    // Мокаем useHttp и возвращаем объект с request
    useHttp.mockReturnValue({
      request: jest.fn().mockResolvedValue({ count: 0 }), // Можете замокать реальное поведение request
    });
  });

  it("UserCounter render", () => {
    render(<UserCounter />);

    expect(screen.getByText(/user count/i)).toBeInTheDocument();
  });

  // it("initialization value user count", () => {
  //   // Мокаем useHttp и возвращаем объект с request
  //   useHttp.mockReturnValue({
  //     request: jest.fn().mockResolvedValue({count: 0}), // Можете замокать реальное поведение request
  //   });

  //   render(<userCounter />);
  //   expect(screen.getByText(/user count:/i)).toHaveTextContent("user count: 0");
  // });

  //  НУЖНО СНАЧАЛА ПРОВЕРИТЬ ЧТО ПОЛУЧАЕМ СО СТЕЙТА ЧИСЛО COUNT
  //const { count } = useSelector((state) => state.userFetchCounter);
  //

  // it("called dispatch function", async () => {

  //   useHttp.mockReturnValue({
  //     request: jest.fn().mockResolvedValue({ count: 10 }), // Можете замокать реальное поведение request
  //   });
  //   let mockDispatch = jest.fn();
  //   useDispatch.mockReturnValue(mockDispatch);

  //   render(<UserCounter />);

  //   await waitFor(() => {
  //     expect(mockDispatch).toHaveBeenCalledWith({
  //       type: "FETCH_COUNTER",
  //       payload: { count: 10 },
  //     });
  //   });

  //   console.log(mockDispatch.mock, "log");

  //   expect(screen.getByText(/user count:/i)).toHaveTextContent(
  //     "user count: 10"
  //   );
  // });
  // it("should fetch and display the user count", async () => {
  //   // Мокаем возвращаемое значение useSelector
  //   useSelector.mockReturnValue({ count: 0 });

  //   // Создаем мок для dispatch
  //   const mockDispatch = jest.fn();
  //   useDispatch.mockReturnValue(mockDispatch);

  //   // Мокаем запрос HTTP
  //   const mockRequest = jest.fn().mockResolvedValue({ count: 10 });
  //   useHttp.mockReturnValue({ request: mockRequest });

  //   // Рендерим компонент
  //   render(<UserCounter />);
  //   expect(screen.getByText(/user count:/i)).toHaveTextContent("user count: 0");

  //   // Ждем, пока промис завершится и компонент обновится
  //   await waitFor(() => {
  //     expect(mockDispatch).toHaveBeenCalledWith({
  //       type: "FETCH_COUNTER",
  //       payload: { count: 10 },
  //     });
  //   });

  //    // Проверяем, что текст с user count обновился
  //    expect(screen.getByText(/user count:/i)).toHaveTextContent("user count: 10");
  // });
});
