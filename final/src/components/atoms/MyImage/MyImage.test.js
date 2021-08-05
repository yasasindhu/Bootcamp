
// import React from 'react';
// import MyImage from './MyImage'

// import { cleanup, fireEvent, render, screen} from '@testing-library/react'



import { cleanup, render, screen } from '@testing-library/react';
import MyImage from './MyImage';


afterEach(cleanup)

describe('Logo', () => {
  test('Image must have src = "https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/ae5e266d-f03e-4732-af5b-a8ebdac94494.svg" ', () => {
    const { getByTestId } = render(<MyImage src = "https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/ae5e266d-f03e-4732-af5b-a8ebdac94494.svg"/>);
    expect(getByTestId('image')).toBeTruthy();
  });
});

















// afterEach(cleanup)

// describe('App', () => {
//     test('check the image', () => {
//       const {getByTestId}=render(<MyImage src = "logo.png"/>)
//       const name = getByTestId('my image')
//       expect(name.textContent).toBe('my image')
//     })
//   })


//   describe('Checking the Button Click', () =>{
//     const handleClick = jest.fn();

//     it('Checking the Click', () => {
//       const {getByTestId} = render(<Mybutton
//         onClick = { handleClick }
//       />)
//       expect(getByTestId("button")).toBeTruthy();
//     });


//     it('Checking the Function Call', () => {
//       render(<Mybutton text = 'Add Job' onClick = {handleClick} />)

//       fireEvent.click(screen.getByText(/Add Job/i))
//       expect(handleClick).toHaveBeenCalledTimes(1);
//     })
//   })
