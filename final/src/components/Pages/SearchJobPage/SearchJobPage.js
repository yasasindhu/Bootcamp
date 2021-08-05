import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import SideNavBar from '../../Organism/SideNavBar/SideNavBar';
import TopNavigation from '../../Organism/TopNavigation/TopNavigation';
import JobCard from '../../molecules/JobCard/JobCard'
import { useSelector } from "react-redux";
import MyTypography from '../../atoms/MyTypography/MyTypography';
import { JobSearch } from '../../molecules/searchTab/jobSearch';






export default function SearchJobPage(){
    const state = useSelector((state => state.jobs))
    const jobsInFindJobs = state.jobsInFindJobs
    return(
        <Grid container direction="row">
            <Grid item xs = {2}>
                    <SideNavBar/>
            </Grid>
            <Grid item xs = {10}>
                <Grid item style = {{width: "100%"}}>
                    <TopNavigation locationName="Marredpally"/>
                </Grid>
                <Grid style = {{ paddingLeft: "60px"}}>
                    <Grid style = {{paddingTop: '20px', paddingBottom: '15px'}}>
                        <MyTypography variant = "h4" component = "h3" children = "Find Jobs"/>
                    </Grid>
                <JobSearch width="1050px"/>
                </Grid>
                <Grid style = {{ paddingLeft: "60px"}}>
                    <Typography variant="h6" style = {{ color: "#324552", paddingTop: "20px", paddingBottom:"5px",  fontSize: "20px", fontFamily: "Montserrat", textAlign: "left" }}>
                            Recommend for you
                    </Typography>
                    <Typography variant="h1" style = {{ paddingBottom:"20px",  fontSize: "15px", fontFamily: "Montserrat", textAlign: "left", color: "grey" }}>
                        Based on your profile, skills and search history
                    </Typography>
                </Grid>
                <Grid container direction="row">
                    {                           
                    // logo = {item.logo} roleName = {item.roleName} companyName = {item.companyName}
                    // location = {item.location} icons = {item.icons}
                        jobsInFindJobs.map((item) =>(
                            <JobCard job = {item}/>
                        ))                        
                    }
                </Grid>
            </Grid>
        </Grid>
    );
}