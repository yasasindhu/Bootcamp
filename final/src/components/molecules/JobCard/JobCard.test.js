import { render, screen, cleanup } from '@testing-library/react';
import JobCard from './JobCard';

import LocalTaxiOutlinedIcon from '@material-ui/icons/LocalTaxiOutlined';
import TrainOutlinedIcon from '@material-ui/icons/TrainOutlined';
import DirectionsBusOutlinedIcon from '@material-ui/icons/DirectionsBusOutlined';
import MotorcycleOutlinedIcon from '@material-ui/icons/MotorcycleOutlined';
import jobCardDetails from '../../Organism/RenderJobCard/jobCardDetails'

describe('Typography Rendered', () => {
  test('check the Descption Card title', () => {
      const { getByTestId } = render(<JobCard job = {jobCardDetails[0]}/>);
      expect(getByTestId('cardinjobcard')).toBeTruthy();
  });
});