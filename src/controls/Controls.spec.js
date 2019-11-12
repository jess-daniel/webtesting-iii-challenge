// Test away!
import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";

import Controls from "./Controls";

test("it renders correctly", () => {
  expect(render(<Controls />)).toMatchSnapshot();
});

test("toggleClosed toggles between open and closed", () => {
  const toggleClosedMock = jest.fn();
  const { getByText } = render(<Controls toggleClosed={toggleClosedMock} />);
  const closeButton = getByText(/close gate/i);
  fireEvent.click(closeButton);
  expect(toggleClosedMock).toHaveBeenCalled();
});

test("toggleLocked toggles between locked and unlocked", () => {
  const toggleLockedMock = jest.fn();
  const { getByText } = render(
    <Controls locked={false} closed={true} toggleLocked={toggleLockedMock} />
  );
  const lockedButton = getByText(/lock gate/i);
  fireEvent.click(lockedButton);
  expect(getByText(/lock gate/i)).toBeTruthy();
  expect(toggleLockedMock).toHaveBeenCalled();
});
