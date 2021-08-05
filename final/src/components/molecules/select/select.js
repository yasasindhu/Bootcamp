/* eslint-disable no-use-before-define */
import React from 'react';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import NoSsr from '@material-ui/core/NoSsr';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import customtheme from '../../theme.jsx';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Button } from '@material-ui/core';
const Label = styled('label')`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`;

const InputWrapper = styled('div')`
  ${'' /* width: 500px;
  height: 600px;
  display: 'flex';
  flexDirection:'row';
  border:'1.5px solid #5ac568';
  border-radius: 100px;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  backgroundColor : 'white', */}

  width: 500px;
  height: 60px;
  margin: 20px 210px 0px 80px;
  border: 1.5px solid #5ac568;
  background-color: #fff;
  border-radius: 10px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color:1.5px solid #5ac568 ;
  }

  &.focused {
    border-color: 1.5px solid #5ac568;
    ${'' /* box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2); */}
  }

  & input {
    font-size: 24px;
    height: 40px;
    width:190px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
   
  }
`;

// const Tag = styled(({ label, onDelete, ...props }) => (
//   <div {...props}>
//    <div className={classes.root}>
//     <span>{label}</span>
//     </div>
//     <CloseIcon onClick={onDelete} />
//   </div>
//  ))
//  `
//   display: flex;
//   align-items: center;
//   height: 24px;
//   margin: 6px;
//   line-height: 22px;
//   background-color: #fafafa;
//   border: 1.5px solid #5ac568;
//   border-radius: 6px;
//   box-sizing: content-box;
//   // padding: 0 4px 0 10px;
//   padding: 8px 10px;
//   gap:8px;
//   outline: 0;
//   overflow: hidden;
  
//   &:focus {
//     border-color: #40a9ff;
//     background-color: #e6f7ff;
//   }

//   & span {
//     overflow: hidden;
//     white-space: nowrap;
//     text-overflow: ellipsis;
//   }

//   & svg {
//     font-size: 20px;
//     cursor: pointer;
//     padding: 4px;
//     color: #324552;
//   }
// `;
const useStyles = makeStyles({
	
	header: {
		 display: "flex",
		 justifyContent: "space-between",
		 alignItems: "center",
		 objectFit:'contain',
     padding: '18px 18px 18px 20px',
	},
  root: {
  fontFamily:'Montserrat',
  fontSize: '16px',
  fontWeight: '500',
  lineHeight: '1.5',
  letterSpacing: '0.1px',
  textAlign: 'left',
  color:'#19293b',
 },
 rightGrid:{
  // width: '50%',
  // height: '900px',
   MarginLeft:'50%',
   backgroundColor: '#e7fce0'
},
  title:{
  margin: '80px 160px 30px 80px',
  fontFamily: 'Montserrat',
  fontSize: '32px',
  fontWeight: 600,
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: '1.31',
  letterSpacing: '0.1px',
  textAlign: 'left',
  width: '550px',
  height: '84px',
  },
  subtitle:{
   margin: '20px 176px 20px 80px',
  // margin:'0 0 4px', 
  fontFamily: 'Montserrat',
  fontSize: '20px',
  fontWeight: '600',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: '1.3',
  letterSpacing: '0.2px',
  textAlign: 'left',
  }
});


const Listbox = styled('ul')`
   fontFamily: Montserrat,
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color:#fff;
  overflow: auto;
  max-height: 250px;
  width:500px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  margin-left: 80px;
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: #fafafa;
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li[data-focus='true'] {
    background-color: #e6f7ff;
    cursor: pointer;

    & svg {
      color: #000;
    }
  }
`;

export default function CustomizedHook({handleOnClickBackButton}) {
  const classes = useStyles();

  const Tag = styled(({ label, onDelete, ...props }) => (
    <div {...props}>
     <div className={classes.root}>
      <span>{label}</span>
      </div>
      <CloseIcon onClick={onDelete} />
    </div>
   ))
   `
    display: flex;
    align-items: center;
    height: 24px;
    margin: 6px;
    line-height: 22px;
    background-color: #fafafa;
    border: 1.5px solid #5ac568;
    border-radius: 6px;
    box-sizing: content-box;
    // padding: 0 4px 0 10px;
    padding: 8px 10px;
    gap:8px;
    outline: 0;
    overflow: hidden;
    
    &:focus {
      border-color: #40a9ff;
      background-color: #e6f7ff;
    }
  
    & span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  
    & svg {
      font-size: 20px;
      cursor: pointer;
      padding: 4px;
      color: #324552;
    }
  `;

  const {
    getRootProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: 'customized-hook-demo',
    defaultValue: [],
    multiple: true,
    options: top100Films,
    getOptionLabel: (option) => option.value,
  });
console.log(value.length);
console.log(value);
  return (
    <NoSsr data-testid = "nossrinselect">
      <div  data-testid = "1stdivinselect">
      <ThemeProvider theme={customtheme}>
        <div {...getRootProps()} data-testid = "2nddivinselect">
        <div >
        <Typography className={classes.title}>More than 2000 people are using Green Commute</Typography>
        </div>
        <div className={classes.subtitle}>
        <Button color='secondary' onClick={handleOnClickBackButton} ><ArrowBackIcon/>Back</Button>
        <Typography> What do you want to do?</Typography>
        </div>
          <InputWrapper data-testid = "inputwrapperinselect" ref={setAnchorEl} className={focused ? 'focused' : ''}>
          <div className={classes.header} data-testid = "3rddivinselect">
          <img data-testid = "imginselect"  src={"https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/1cf5595f-c291-4826-a6b4-1590090a90ff.svg"} width= '24px' height= '24px' />
         </div>
            {value.map((option, index) => (
              <Tag data-testid = "taginselect" label={option.value} {...getTagProps({ index })} />
            ))}

            <input data-testid = "input1inselect" {...getInputProps()} />
          </InputWrapper>
        </div>
        {value.length<2 && groupedOptions.length > 0 ? (
          <Listbox data-testid = "input1inselect" {...getListboxProps()}>
            {groupedOptions.map((option, index) => (
              <li data-testid = "li1inselect" {...getOptionProps({ option, index })}>
                <span data-testid = "span1inselect">{option.value}</span>
                <CheckIcon data-testid = "checkinselect" fontSize="small" />
              </li>
            ))}
          </Listbox>
        ) : null}
        <div data-testid = "4thinselect">    
        </div>
        </ThemeProvider>
      </div>
      {/* <Grid item className={ classes.rightGrid}>
        <Aqi text={"Real - Time Air Quality Index (AQI) in this location"} 
                 imgPath={ "https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/b7d255bc-324e-48a6-84ab-c0c15a18b17f.svg"} 
                 isNumber= {true}
                 count={"894"}
                 isNumberTag={'true'}
                 numberTag={value}
                 textSize={"20px"}
                 countSize= {"100px"}
                 numberTagSize={"26px"}
                 color={"#19293b"}
              /> 
         </Grid> */}
    </NoSsr>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { value: "Hyderabad", label: "Hyderabad" },
  { value: "Mumbai", label: "Mumbai" },
  { value: "Chennai", label: "Chennai" },
  { value: "Delhi", label: "Delhi" },
  {value:" Assam",label:" Assam"},
  {value:"Bihar ",label:"Bihar"},
  {value:"Chhattisgarh	",label:"Chhattisgarh	"},
  {value:"Goa",label:"Goa"},
  {value:"Gujarat",label:"Gujarat"},
  {value:"Haryana",label:"Haryana"},
  {value:"Jharkhand",label:"Jharkhand"},
  {value:"Karnataka",label:"Karnataka"},
  {value:"Kerala",label:"Kerala"},
  {value:"Maharashtra",label:"Maharashtra"},
];
