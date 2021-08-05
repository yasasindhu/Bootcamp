import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import customtheme from "../../theme";
const useStyles = makeStyles({
  underline: {
    "&&&:before": {
      borderBottom: "none"
    },
    "&&:after": {
      borderBottom: "none"
    }
  },
  root:{
    width: "230px",
    paddingTop: '6px'
  },
  input: {
    ...customtheme.typography.subtitle1,
    color: '#5f7381',
    paddingTop: '10px'
}
});
export default function CustomTextFieldForJobLocationForJobListPage({placeholder}) {
  const classes = useStyles();
  return(
    //   <ThemeProvider theme = {customtheme}>
           <TextField  placeholder={ placeholder } InputProps={{ classes }} />
    //   </ThemeProvider>
  );
}