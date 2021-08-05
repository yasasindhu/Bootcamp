import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import jobReducer from './reducer';
import jobDescriptionReducer from "./reducerForShowJob";
import showPageReducer from "./reducerForShowPage"

const mainReducer = combineReducers({ jobs: jobReducer, jobsDescription: jobDescriptionReducer, showPage: showPageReducer });
export default createStore(
    mainReducer,
    composeWithDevTools(applyMiddleware( ReduxThunk ))
);