import { Grid } from "@material-ui/core";
import React from "react";
import JobCardSmall from "../../molecules/JobCardsmall/JobCardSmall";
import jobCardDetails from "./jobCardDetails"
import LocalTaxiOutlinedIcon from '@material-ui/icons/LocalTaxiOutlined';
import TrainOutlinedIcon from '@material-ui/icons/TrainOutlined';
import DirectionsBusOutlinedIcon from '@material-ui/icons/DirectionsBusOutlined';
import MotorcycleOutlinedIcon from '@material-ui/icons/MotorcycleOutlined';





export function RenderJobCardsForPage3(props){
  
    const jobsInFindJobs = jobCardDetails
    return(
            <Grid container spacing={8} direction="column"> 
            
            {jobsInFindJobs.map((item) => (
               
                <Grid item>
                <JobCardSmall  logo = {item.logo} roleName = { item.roleName} companyName = {item.companyName} location = { item.location }  icons = {[<LocalTaxiOutlinedIcon />, <TrainOutlinedIcon /> , <DirectionsBusOutlinedIcon /> , <MotorcycleOutlinedIcon />]} />
                </Grid>
            ))

            }
            </Grid> 
    );
}