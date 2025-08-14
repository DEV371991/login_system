import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LoginForm from "../components/LoginForm/LoginForm";

describe("LoginForm", () => {
  it("shows success on correct credentials", async () => {
    const onLoginSuccess = jest.fn();
    render(<LoginForm onLoginSuccess={onLoginSuccess} />);

    fireEvent.change(screen.getByPlaceholderText(/username/i), {
      target: { value: "admin" }
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: "1234" }
    });

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => expect(onLoginSuccess).toHaveBeenCalled());
  });
});
