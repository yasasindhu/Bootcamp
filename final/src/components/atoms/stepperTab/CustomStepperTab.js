import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Step, Stepper, StepLabel } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import customtheme from '../../theme';

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
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    iconContainer: { // define styles for icon container
        transform: 'scale(2)',
    },
    
  }));

export default function HorizontalLinearStepper(props) {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = props.step;
  
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
      <div >
            <Stepper activeStep={activeStep}  connector={<QontoConnector />}>
            {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
            
                if (isStepSkipped(index)) {
                stepProps.completed = false;
                }
                return (
                <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps} data-testid = "steplabel">{label}</StepLabel>
                </Step>
                );
            })}
            </Stepper>
      </div>
      </ThemeProvider>
    );
  }