import { FINDJOB,  SAVEJOB, SHOWJOB, SHOWPAGE } from './types';

export const findingBook = (job) => {
    return{
        type: FINDJOB,
        job: job,
    }
}

export const savedJob = (job) => {
    return{
        type: SAVEJOB,
        job: job,
    }
}

export const showJob = (job) => {
    return{
        type: SHOWJOB,
        job: job,
    }
}

export const showPage = (page) => {
    return{
        type: SHOWPAGE,
        page: page
    }
}