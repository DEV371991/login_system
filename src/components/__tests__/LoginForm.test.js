// src/components/LoginForm.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginForm from "../../components/LoginForm";

describe("LoginForm", () => {
  test("renders username and password inputs", () => {
    render(<LoginForm onLogin={() => {}} />);
    
    expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
  });

  test("allows typing in inputs", () => {
    render(<LoginForm onLogin={() => {}} />);
    const usernameInput = screen.getByPlaceholderText("Username");
    const passwordInput = screen.getByPlaceholderText("Password");

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "secret" } });

    expect(usernameInput.value).toBe("testuser");
    expect(passwordInput.value).toBe("secret");
  });

  test("calls onLogin with username and password when submitted", () => {
    const handleLogin = jest.fn();
    render(<LoginForm onLogin={handleLogin} />);
    console.log("test......................")
    fireEvent.change(screen.getByPlaceholderText("Username"), { target: { value: "testuser" } });
    fireEvent.change(screen.getByPlaceholderText("Password"), { target: { value: "secret" } });
    fireEvent.submit(screen.getByTestId("login-form"));

    

    expect(handleLogin).toHaveBeenCalledTimes(1);
    expect(handleLogin).toHaveBeenCalledWith({ username: "testuser", password: "secret" });
  });
});
