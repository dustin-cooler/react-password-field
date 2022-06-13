import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor, cleanup } from "@testing-library/react";

import PasswordGroup, {
  ErrorMessage,
  getPasswordErrors,
} from "./PasswordGroup";

describe("Running Tests for getPasswordErrors function", () => {
  test("No password returns correct error", () => {
    const message = getPasswordErrors(undefined);
    expect(message).toBe(ErrorMessage.LENGTH);
  });

  test("Valid password returns undefined", () => {
    const message = getPasswordErrors("Ab6*F3");
    expect(message).toBeUndefined();
  });

  test("Short password returns correct error", () => {
    const message = getPasswordErrors("Ab6*");
    expect(message).toBe(ErrorMessage.LENGTH);
  });

  test("All uppercase password returns correct errors", () => {
    const message = getPasswordErrors("ABCDEFG");
    expect(message).toContain(ErrorMessage.LOWERCASE);
    expect(message).toContain(ErrorMessage.NUMBER);
    expect(message).toContain(ErrorMessage.SPECIAL);
  });

  test("No uppercase password returns correct error", () => {
    const message = getPasswordErrors("ab6*f3");
    expect(message).toBe(ErrorMessage.UPPERCASE);
  });
});

describe("Running Tests for PasswordGroup component", () => {
  afterEach(cleanup);

  test("renders the PasswordGroup component", () => {
    render(<PasswordGroup formTestId="test-form" />);
    expect(screen.getByTestId("test-form")).toBeInTheDocument();
  });

  test("Show button makes input text visible", async () => {
    const user = userEvent.setup();
    render(<PasswordGroup />);

    expect(screen.getByLabelText("New Password")).toHaveAttribute(
      "type",
      "password"
    );

    const button = screen.getByText("Show");
    await user.click(button);

    await waitFor(() => screen.getByText("Hide"));

    expect(screen.getByLabelText("New Password")).toHaveAttribute(
      "type",
      "text"
    );
  });

  test("Submitting invalid password shows error", async () => {
    const user = userEvent.setup();
    render(<PasswordGroup />);

    const firstInput = screen.getByLabelText("New Password");
    await user.type(firstInput, "Sh0rt");

    const secondInput = screen.getByLabelText("Confirm Password");
    await user.type(secondInput, "Sh0rt");

    const button = screen.getByText("Submit");
    await user.click(button);

    await waitFor(() => screen.getByText("Please correct the errors above"));

    expect(
      screen.getByText(ErrorMessage.LENGTH, { exact: false })
    ).toBeInTheDocument();
  });

  test("Submitting if passwords don't match shows error", async () => {
    const user = userEvent.setup();
    render(<PasswordGroup />);

    const firstInput = screen.getByLabelText("New Password");
    await user.type(firstInput, "V@1id!");

    const secondInput = screen.getByLabelText("Confirm Password");
    await user.type(secondInput, "Sh0rt");

    const button = screen.getByText("Submit");
    await user.click(button);

    await waitFor(() => screen.getByText("Please correct the errors above"));

    expect(screen.getByText(ErrorMessage.MATCH)).toBeInTheDocument();
  });

  test("Valid submission shows success", async () => {
    const user = userEvent.setup();
    render(<PasswordGroup />);
    const firstInput = screen.getByLabelText("New Password");
    await user.type(firstInput, "V@1id!");

    const secondInput = screen.getByLabelText("Confirm Password");
    await user.type(secondInput, "V@1id!");

    const button = screen.getByText("Submit");
    await user.click(button);

    await waitFor(() => screen.getByText("Password submitted successfully"));

    expect(
      screen.getByText("Password submitted successfully")
    ).toBeInTheDocument();
  });
});
