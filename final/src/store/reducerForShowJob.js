import { SHOWJOB } from './types'

const initialState = {
    jobInShowJob: [],
    previewJobDescription: false,
}

const jobDescriptionReducer = (state = initialState, action) => {
    switch(action.type){
        case SHOWJOB:
            return{                
                jobInShowJob: action.job,
                previewJobDescription: true,
            };
        default:
            return state;
    }
}

export default jobDescriptionReducer;