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
});
