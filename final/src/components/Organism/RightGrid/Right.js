import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import JobCardInfo from '../../molecules/JobCardInfo/JobCardInfo'
import  { ThemeProvider } from '@material-ui/core'
import DescriptionCard from '../../molecules/DescriptionCard/DescriptionCard';
import DescriptionList from '../../molecules/DescriptionList/DescriptionList';

import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import customtheme from "../../theme";

const Right = (  {positionAppliedName,companyName,locationName,imageSrc,head,body,title,text} )  => {

  const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
      },
    columnAlignment: {
        display : 'inline-flex',
        flexDirection : 'column',
        gap:'15px',
    },
    buttonStyle:{
        width:'101px',
        height:'38px',

    },
    buttonAlignment:{
        display : 'inline-flex',
        gap:'15px',  
        paddingLeft:'70px', 
        paddingTop: '10px',
        paddingBottom: '25px'
    },
    buttonSave:{
        color:'#5ac568',
        backgroundColor:"white",
        borderRadius:'10px',
        border:'2px solid #5ac568',
        textTransform:'none',
    },
    buttonApply:{
        backgroundColor:'#5ac568',
        color:"white",
        borderRadius:'10px',
        textTransform:'none',
        fontWeight:'bold'
        //border:'2px solid #5ac568'
    },
    buttonRoutes:{
        backgroundColor:'#5ac568',
        color:"white",
        borderRadius:'10px',
        textTransform:'none',
        fontWeight:'bold',
        border:'2px solid #5ac568',
        width:'208px',
        height:'50px',
        marginTop:'600px',
      
        position: "fixed",
        marginLeft:'100px'
    },
    paper: {
        maxWidth: 390,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
      },
    
    

}));

const classes = useStyles();

  return (
    <ThemeProvider theme = {customtheme}>
    <div   className={classes.columnAlignment}  >
         <Paper  className={classes.paper}>
        <Grid data-testid='main' container wrap="nowrap" spacing={2} >
         
          <Grid item xs>
          <JobCardInfo positionAppliedName={positionAppliedName} companyName={companyName} locationName={locationName} imageSrc={imageSrc} />
              <div className={ classes.buttonAlignment}>
                <Button   data-testid = 'button' className={` ${classes.buttonStyle} ${classes.buttonSave}` }   > Save</Button>
                  <Button   data-testid = 'Applybutton' className={` ${classes.buttonStyle} ${classes.buttonApply}` }  variant="contained"> Apply</Button>
              </div>

        <Box p={2} bgcolor="background.paper">
        
      </Box>
        <Divider  data-testid = 'divider'/>

        <Box p={2} bgcolor="background.paper">
        
        </Box>
        <Grid >
              <DescriptionCard head={head} body={body} />
        </Grid>
        <Box p={1} bgcolor="background.paper">
        
        </Box>
        <Divider />
        <Box p={1} bgcolor="background.paper">
            </Box>



        <DescriptionList title={title} text={text} />
       
           
          </Grid>
        </Grid>
        </Paper>
        <Button  className={`  ${classes.buttonRoutes}` }  variant="contained" on> Green Commute Routes</Button>      
    </div>
    </ThemeProvider>
  );
}

export default Right;