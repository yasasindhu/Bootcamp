import { Button, Divider, Grid, makeStyles, ThemeProvider } from "@material-ui/core";
import {LocationOnOutlined, WorkOutline } from "@material-ui/icons";
import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import CustomTextFieldForJobSearchForJobListPage from '../../atoms/TextField/CustomTextFieldForJobSearchForJobListPage'
import CustomTextFieldForJobLocationForJobListPage from '../../atoms/TextField/CustomTextFieldForJobLocationForJobListPage'
import customtheme from "../../theme";



const useTextFieldStyles = makeStyles({
    underline: {
        "&&&:before": {
          borderBottom: "none"
        },
        "&&:after": {
          borderBottom: "none"
        }
      }
})

const useStyles = makeStyles((theme) => ({
    searchIcon:{
        // marginTop: '0px',
        height: '50px',
        width: '64px',
        backgroundColor: "#5ac568",
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "10px",
        borderTopLeftRadius : "0%",
        borderBottomLeftRadius: "0%",
        contrastText: "#fafafa",
    },
    textFieldSearch:{
        width: "200px",
        paddingTop: '6px',
    },
    textFieldLocation:{
        // width: "400px",
        paddingTop: '6px'
    },
    iconClass: {
        color: '#9bbdcb',
        width: '24px',
        height: '24px', 
        paddingTop: '12px',
        paddingRight: '4px'
    },
    gridComponent: {
        width: '690px', 
        height: '50px',
        margin: '15px 30px 30px 60px',
        padding: '0 0 0 15px',
        borderRadius: '10px',
        border: 'solid 1px #e3f3f6',
        backgroundColor: '#ffffff',
        margin: {
            margin: theme.spacing(1),
        },
    }
}))


export function JobSearchForJobList({width}){
    
    const classes = useStyles();
    
    const [valInSearchSkills,setValInSearchSkills] = React.useState('');

    const handleChangeForTextInSearchSkills = (newVal) => {

        setValInSearchSkills(newVal)
    }

    const handleChange = () => {
        
        if(valInSearchSkills===''){
            alert('Enter the Search Skills')
        }
        else{
            // dispatch(showPage("PAGE3"))
        }
    }

   
    return(
        <div>
            <ThemeProvider theme = { customtheme}>
            <Grid container direction="row" className = { classes.gridComponent } >
                <Grid item direction="column" style = {{ width: "350px"}}>
                    <WorkOutline className = { classes.iconClass }></WorkOutline>
                    <CustomTextFieldForJobSearchForJobListPage placeholder = "Search Jobs" className = "textFieldSearch"/>
                </Grid>
                <Divider style = {{ marginTop: '5px', marginBottom: '5px', height: '40px'}} orientation="vertical"/>
                <Grid item direction="column">
                        <LocationOnOutlined className = { classes.iconClass }></LocationOnOutlined>
                        {/* <TextField placeholder={<Typography variant = "subtitle1">Location</Typography>} className = { classes.textFieldLocation}> */}
                        <CustomTextFieldForJobLocationForJobListPage placeholder = "Location" className = "textFieldLocation"/>   
                </Grid>
                <Grid item>
                        <Button variant = "contained"    color = "primary" className = { classes.searchIcon} onClick = {(event) => { handleChange() }}>
                        <SearchIcon style = {{ width:"24px", height: "24px"}}/>
                        </Button>
                </Grid>
            </Grid>
            </ThemeProvider>
        </div>
    );
}