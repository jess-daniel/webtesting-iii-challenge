// Test away!
import React from "react";
import { render } from "@testing-library/react";

import Display from "./Display";

test("Display renders properly", () => {
  expect(render(<Display />)).toMatchSnapshot();
});

test("default gate is open", () => {
  const { getByText } = render(<Display />);
  getByText(/open/i);
});

test("Gate cganges to close", () => {
  const { getByText } = render(<Display />);
  getByText(/open/i);
});
