import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import IconInStorybook from "./IconInStorybook";

describe("checkbox renders correctly", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<IconInStorybook/>);
    expect(asFragment()).toMatchSnapshot();
  });

});
