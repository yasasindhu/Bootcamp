import { render } from '@testing-library/react';
import JobCard from './JobCard';

import jobCardDetails from '../../Organism/RenderJobCard/jobCardDetails'


logo,
	roleName,
	companyName,
	location,

describe('Typography Rendered', () => {
  test('check the Descption Card title', () => {
      const { getByTestId } = render(<JobCard logo = {jobCardDetails[0].logo} roleName = {jobCardDetails[0].roleName}
                 companyName = {jobCardDetails[0].companyName} location = {jobCardDetails[0].location}/>);
      expect(getByTestId('cardinjobcard')).toBeTruthy();
  });
});