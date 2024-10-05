import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { useDispatch, useSelector } from "react-redux";
import { useHttp } from "../../services/http.hooks";
import UserCounter from "./userCounter";

jest.mock("../../services/http.hooks");

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("UserCounter component", () => {
  beforeEach(() => {
    useSelector.mockReturnValue({ count: 0 });
    useDispatch.mockReturnValue(jest.fn()); // Mock dispatch in both tests
    useHttp.mockReturnValue({
      request: jest.fn().mockResolvedValue({ count: 0 }) // Ensure useHttp is mocked
    });
  });

  it("UserCounter render", () => {
    render(<UserCounter />);

    const userCount = screen.getByText(/user count/i);
    expect(userCount).toBeInTheDocument();
    expect(userCount).toHaveTextContent("0");
  });
});
