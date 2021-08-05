import React from "react";

import MyTypography from "./MyTypography";

export default {
    title: "atoms/Typography",
    component: MyTypography,
};
const Template = (args) => <MyTypography {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    variant: "h4",
    component: "h3",
    children: "Recommended for you",
    
};




// PrimaryTimesNewRoman.args = {
//     ...Primary.args,
//     styles: {
//         fontSize: '20px',
//         color: '#324552',
//         fontFamily: 'Times New Roman',
//         lineHeight: '26px',
//         letterSpacing: '0.2px',
//         fontWeight: 'bold'
//     },

// };

// export const PrimaryRaleWay = Template.bind({});

// PrimaryRaleWay.args = {
//     ...Primary.args,
//     styles: {
//         fontSize: '20px',
//         color: '#324552',
//         fontFamily: 'Raleway, sans-serif',
//         lineHeight: '26px',
//         letterSpacing: '0.2px',
//     },

// };



// export const Primary = Template.bind({});

// Primary.args = {
//     variant: "h4",
//     component: "h3",
//     children: "Dashboard", //Based on your profile,skills and search history",
//     styles: {
//         fontSize: '16px',
//         color: '#5f7381',
//         fontFamily: 'Montserrat',
//         lineHeight: '24px',
//         letterSpacing: '0.1px',
//     }
// };

// export const SecondaryArial = Template.bind({});

// SecondaryArial.args = {
//     ...Secondary.args,
//     styles: {
//         fontSize: '16px',
//         color: '#5f7381',
//         fontFamily: 'Arial',
//         lineHeight: '24px',
//         letterSpacing: '0.1px'
//     },

// };

// export const SecondaryTimesNewRoman = Template.bind({});

// SecondaryTimesNewRoman.args = {
//     ...Secondary.args,
//     styles: {
//         fontSize: '16px',
//         color: '#5f7381',
//         fontFamily: 'Times New Roman',
//         lineHeight: '24px',
//         letterSpacing: '0.1px'
//     },

// };



export const Secondary = Template.bind({});

Secondary.args = {
    component: "h3",
    children: "Find Jobs",
    styles: {
        fontSize: '16px',
        color: '#5ac568',
        fontFamily: 'Montserrat',
        lineHeight: '24px',
        letterSpacing: '0.1px',
    }
};
// export const TertiaryArial = Template.bind({});

// TertiaryArial.args = {
//     ...Tertiary.args,
//     styles: {
//         fontSize: '16px',
//         color: '#5ac568',
//         fontFamily: 'Arial',
//         lineHeight: '24px',
//         letterSpacing: '0.1px'
//     }
// };
// export const TertiaryTimesNewRoman = Template.bind({});

// TertiaryTimesNewRoman.args = {
//     ...Tertiary.args,
//     styles: {
//         fontSize: '16px',
//         color: '#5ac568',
//         fontFamily: 'Times New Roman',
//         lineHeight: '24px',
//         letterSpacing: '0.1px'
//     }
// };
