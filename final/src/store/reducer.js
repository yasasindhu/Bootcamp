import jobCardDetails from '../components/Organism/RenderJobCard/jobCardDetails'
import { FINDJOB, SAVEJOB } from './types';

const initialState = {
    jobsInFindJobs: jobCardDetails,
    jobsInSavedJobs: [],
};

const jobReducer = (state = initialState, action) => {
    switch(action.type){
        case FINDJOB:
            return {
                ...state.jobsInFindJobs
            }
        case SAVEJOB:
            return{
                ...state,
                jobsInSavedJobs: [...state.jobsInSavedJobs,action.job]
            }
        default:
            return state;
    }
};

export default jobReducer;