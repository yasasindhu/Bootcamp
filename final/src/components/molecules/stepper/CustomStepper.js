import React from 'react';
import { makeStyles ,ThemeProvider} from '@material-ui/core/styles';
import { Step, Stepper, StepLabel, StepConnector  ,Button, Typography} from '@material-ui/core';
import customtheme from '../../theme';
import { withStyles } from '@material-ui/styles';
import Select from '../select/select';
import SearchSkills from '../select field/select';
import  TextField   from '../TextField/TextField';
import Divider from '@material-ui/core/Divider';


const QontoConnector = withStyles({
    active: {
      '& $line': {
        borderColor: '#ffffff',
      },
    },
    completed: {
      '& $line': {
        borderColor: '#ffffff',
      },
    },
    line: {
      borderColor: '#ffffff',
      borderTopWidth: 3,
      borderRadius: 1,
    },
  })(StepConnector);

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    button: {
      // marginRight: theme.spacing(1),
      // marginTop:'30px',
      // marginTop: '80px',
      // margingRight:'20px',
      // marginLeft:'80px',
    width: '136px',
    height: '50px',
    margin: '30px 20px 370px 80px',
    borderRadius: '10px',
    gap:''
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    iconContainer: { // define styles for icon container
        transform: 'scale(2)',
    },
    inputField:{
    // border: '1.5px solid #5ac568',
    // borderRadius: '6px',
    paddingLeft:'4px',
    width: '500px',
  height: '60px',
  margin: '20px 210px 0px 80px',
  borderColor: ' #fff',
  backgroundColor: '#fff',
  borderRadius: '100px',
  padding: '1px',
  display: 'flex',
  flexWrap: 'wrap',
    },
    stepperLabel:{
      marginLeft:' 60px',
    }

    
  }));

export default function HorizontalLinearStepper(props) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
   console.log(activeStep);

    const steps = props.steps;
  
    const isStepOptional = (step) => {
      return step === 1;
    };
  
    const isStepSkipped = (step) => {
      return skipped.has(step);
    };
  
    const handleNext = () => {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
  
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleSkip = () => {
      if (!isStepOptional(activeStep)) {
        // You probably want to guard against something like this,
        // it should never occur unless someone's actively trying to break something.
        throw new Error("You can't skip a step that isn't optional.");
      }
  
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped((prevSkipped) => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep);
        return newSkipped;
      });
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
   
    return (
    <ThemeProvider theme = {customtheme}>
      <div data-testid = "maindivincustomstepper">
            <Stepper data-testid = "stepperincustomstepper" className={classes. stepperLabel} activeStep={activeStep}  connector={<QontoConnector />}>
            {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
            
                if (isStepSkipped(index)) {
                stepProps.completed = false;
                }
                return (
                <Step key={label} {...stepProps} data-testid = "stepincustomstepper">
                    <StepLabel {...labelProps} ><Typography  variant="overline" data-testid = "steplabelincustomstepper">{label}</Typography></StepLabel>
                    
                </Step>
                );
            })}
            </Stepper>
            <Divider  light/>
        <div data-testid = "div2customstepper">
       {activeStep==0 &&
       
       <div >
       <TextField  />
             </div>
       }
        {activeStep==1 && 
        <div>
        {/* <Select handleOnClickBackButton=
        {
          handleBack}/> */}
          <Select handleOnClickBackButton={()=>{
            console.log("hi");
            handleBack()}} />


        {/* <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                  Back
                </Button> */}
        </div>}
        {activeStep==2 && 
        <SearchSkills 
          handleOnClickBackButton={()=>{
            console.log("hi");
            handleBack()}} />
          }
          {activeStep === steps.length ? (
            <div data-testid = "div3incustomstepper">
              <Typography className={classes.instructions} data-testid = "stepstypoincustomstepper">
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} className={classes.button} data-testid = "resetbuttonincustomstepper">
                Reset
              </Button>
            </div>
          ) : (
            <div data-testid = "div4incustomstepper">
              <div data-testid = "div5incustomstepper">
                {/* <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                  Back
                </Button> */}
                {isStepOptional(activeStep) && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSkip}
                    className={classes.button}
                    data-testid = "finishincustomstepper"
                  >
                    Skip
                  </Button>
                )}
  
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                  data-testid = "skipincustomstepper"
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      </ThemeProvider>
    );
  }
