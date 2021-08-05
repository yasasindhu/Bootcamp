import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";

 const CheckboxWithGreenCheck = withStyles({
    root: {
        color: "#5ac568",
        "&$checked": {
          color: "white",                 
          "& .MuiIconButton-label": {
            position: "relative",
            zIndex: 0
          },
          "& .MuiIconButton-label:after": {
            content: '""',
            // left: 2,
            //top: 0.5,
            // right: 2,
            // bottom: 1,
            height: 17,
            width: 17,            
            position: "absolute",
            backgroundColor: "#5ac568",
            zIndex: -2,
            border: "2px solid #5ac568",
            borderRadius: "3px"
          }
        }
      },
      checked :{},
      onChange :{},
      name :{},
     
  
})(Checkbox);
export default CheckboxWithGreenCheck;