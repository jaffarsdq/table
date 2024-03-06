import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';

import SideBar from '../../../components/CommonComponents/sidebar';
import Area from './Area/area'
import City from './City/city'
import Country from './Country/country'
// import paymentMode from '../../pages/UserMangementPage/paymentMode'
// import PaymentType from '../../pages/UserMangementPage/paymentType'
// import OrderSource from '../MasterData/OrderSource/orderSource'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{p: 0  }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return ( <SideBar>
    <Box sx={{ width: '100%',paddingTop:"0" }}>
    <Box sx={{borderTop:1,  borderColor: 'divider',padding:"10px 0px",marginTop:"5px"}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{fontWeight:"500",fontFamily:'Inter',fontSize:{xs:"11px",sm:"14px"}}} label="Country" {...a11yProps(0)} />
          <Tab sx={{fontWeight:"500",fontFamily:'Inter',fontSize:{xs:"11px",sm:"14px"}}} label="City" {...a11yProps(1)} />
          <Tab sx={{fontWeight:"500",fontFamily:'Inter',fontSize:{xs:"11px",sm:"14px"}}} label="Area"{...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <Country/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
       <City/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <Area/>
      </CustomTabPanel>
     </Box> 
     </SideBar>
  );
}
