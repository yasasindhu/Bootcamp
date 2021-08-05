import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import SideNavBar from '../../Organism/SideNavBar/SideNavBar';
import TopNavigation from '../../Organism/TopNavigation/TopNavigation';
import JobCard from '../../molecules/JobCardsmall/JobCardSmall'
import { useSelector } from "react-redux";
import MyTypography from '../../atoms/MyTypography/MyTypography';
import { JobSearchForJobList } from '../../molecules/searchTab/jobSearchForJobList';
import Right from '../../Organism/RightGrid/Right';






export default function JobList(){
    const state = useSelector((state => state.jobs))
    const jobsInFindJobs = state.jobsInFindJobs
    return(
        <Grid container direction="row">
            <Grid item xs = {2}>
                    <SideNavBar/>
            </Grid>
            <Grid direction="column">
                <Grid>
                    <Grid  style = {{width: "100%"}}>
                        <TopNavigation locationName="Marredpally"/>
                    </Grid>
                </Grid>
                <Grid container direction="row" styles = {{marginTop: "40px"}}>
                    <Grid item xs = {8}>
                        <Grid  style = {{ paddingLeft: "60px"}}>
                            <Grid style = {{paddingTop: '20px', paddingBottom: '15px'}}>
                                <MyTypography variant = "h4" component = "h3" children = "Find Jobs"/>
                            </Grid>
                            <JobSearchForJobList/>
                        </Grid>
                        <Grid item style = {{ paddingLeft: "60px"}}>
                            <Typography variant="h6" style = {{ color: "#324552", paddingTop: "20px", paddingBottom:"5px",  fontSize: "20px", fontFamily: "Montserrat", textAlign: "left" }}>
                                Job List
                            </Typography>
                            <Typography variant="h1" style = {{ paddingBottom:"20px",  fontSize: "15px", fontFamily: "Montserrat", textAlign: "left", color: "grey" }}>
                                Based on your search
                            </Typography>
                        </Grid> 
                        <Grid container direction="column" style = {{ paddingLeft: "60px", gap: "30px"}}>
                            {                           
                                jobsInFindJobs.map((item) =>(
                                    <JobCard logo = {item.logo} roleName = {item.roleName} companyName = {item.companyName}
                                        location = {item.location} icons = {item.icons}/>
                                ))                        
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Right positionAppliedName = {jobsInFindJobs[0].positionAppliedName } companyName={jobsInFindJobs[0].companyName} 
                                locationName={jobsInFindJobs[0].locationName} imageSrc={jobsInFindJobs[0].imageSrc} head={jobsInFindJobs[0].head} 
                                body={jobsInFindJobs[0].body} title= {jobsInFindJobs[0].title } text = {jobsInFindJobs[0].text}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}