import React from 'react';
import { makeStyles,ThemeProvider } from '@material-ui/core/styles';
import customtheme from '../../theme.jsx';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        display : 'inline-flex',
        width : '390px',
        flexDirection : 'column',
        alignItems: 'left',
        marginLeft : '5px',
        paddingTop: "20px", 
        paddingBottom: "20px"
    },
}));
const DescriptionCard= ({ head,body}) => {
    const classes = useStyles();

 return (
     <div className={classes.root}>
    <ThemeProvider theme={customtheme} >
        <Typography  variant="h2" data-testId='heading'>{head}</Typography>
        <Box p={1} bgcolor="background.paper">
        
        </Box>
        <Typography  variant="h1" >{body}</Typography>
     </ThemeProvider>
     </div>
 )

}
export default DescriptionCard
