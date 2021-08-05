import { render, screen, cleanup } from '@testing-library/react';
import LocationListItem from './LocationListItem';



describe('Typography Rendered', () => {
    // test('divinlocationlistitem', () => {
    //   render(<LocationListItem/>);
    //   const element = screen.getByTestId('divinlocationlistitem')
    //   expect(element).toBeTruthy();
    // });
    // test('lisiteminlocationlistitem', () => {
    //   render(<LocationListItem/>);
    //   const element = screen.getByTestId('lisiteminlocationlistitem')
    //   expect(element).toBeTruthy();
    // });
    // test('listitemiconinlistitem', () => {
    //   render(<LocationListItem/>);
    //   const element = screen.getByTestId('listitemiconinlistitem')
    //   expect(element).toBeTruthy();
    // });
    // test('roominlocationlistitem', () => {
    //   render(<LocationListItem/>);
    //   const element = screen.getByTestId('roominlocationlistitem')
    //   expect(element).toBeTruthy();
    // });
    // test('locationnameinlocationlistitem', () => {
    //   render(<LocationListItem/>);
    //   const element = screen.getByTestId('locationnameinlocationlistitem')
    //   expect(element).toBeTruthy();
    // });

    test('check the Descption Card title', () => {
      const { asFragment} = render(<LocationListItem locationName="hyd"/>);
        expect(asFragment()).toMatchSnapshot();
    });
  });