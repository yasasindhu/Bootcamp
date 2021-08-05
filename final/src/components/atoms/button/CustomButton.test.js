import React from 'react';
import { render } from '@testing-library/react';
import Mybutton from './CustomButton'

describe("Button renders correctly", () => {
    test("should match snapshot", () => {
      const { asFragment } = render(<Mybutton />);
      expect(asFragment()).toMatchSnapshot();
    });
  
  });
  