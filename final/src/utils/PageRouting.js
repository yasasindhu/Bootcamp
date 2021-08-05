import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SearchJobPage from '../components/Pages/SearchJobPage/SearchJobPage';
import JobList from '../components/Pages/JobList/JobList';

const PageRouting = () => (
  <Switch>
    <Route exact path="/">
        {<SearchJobPage/>}
    </Route>
    <Route exact path="/findJobs">
        {<JobList/>}
    </Route>
    <Redirect exact from="/" to="/welcome"/>
  </Switch>
);

export default PageRouting;