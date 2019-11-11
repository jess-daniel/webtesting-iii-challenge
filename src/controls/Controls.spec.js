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

// test("toggleLocked toggles between locked and unlocked", async () => {
//   const toggleClosedMock = jest.fn();
//   const toggleLockedMock = jest.fn();
//   const { getByText } = render(
//     <Controls toggleLocked={toggleLockedMock} toggleClosed={toggleClosedMock} />
//   );
//   const closeButton = getByText(/close gate/i);
//   await fireEvent.click(closeButton);
//   expect(toggleClosedMock).toHaveBeenCalled();
//   const lockedButton = getByText(/lock gate/i);
//   fireEvent.click(lockedButton);
//   expect(toggleLockedMock).toHaveBeenCalled();
// });
