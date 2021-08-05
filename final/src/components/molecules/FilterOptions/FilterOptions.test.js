import React from 'react';
import { cleanup,  render} from '@testing-library/react'
import FilterOptions from './FilterOptions';

afterEach(cleanup)

describe('App', () => {
    
      test('check the Descption Card title', () => {
          const { getByTestId } = render(<FilterOptions selected = {["job"]}/>);
          expect(getByTestId('divinfilter')).toBeTruthy();
      })
  })


