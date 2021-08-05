import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import IconInStorybook from "./IconInStorybook";
import HorizontalLinearStepper from "./CustomStepperTab";

describe("checkbox renders correctly", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<HorizontalLinearStepper step = {["Your Location"]}  />);
    expect(asFragment()).toMatchSnapshot();
  });

});
