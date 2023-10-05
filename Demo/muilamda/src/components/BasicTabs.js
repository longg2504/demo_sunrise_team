import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import { AccountCircle } from '@mui/icons-material';
import BoltIcon from '@mui/icons-material/Bolt';
import AddIcon from '@mui/icons-material/Add';
import '../style.css';
import MultiActionAreaCard from './MultiActionAreaCard';



function CustomTabPanel(props) {
    const { children, value, index, ss, ...other } = props;


    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            style={ss}
        >

            {value === index && (
                <Box sx={{ p: 3, display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'space-between' }}>
                    <MultiActionAreaCard />
                    <MultiActionAreaCard />
                    <MultiActionAreaCard />
                    <MultiActionAreaCard />
                    <MultiActionAreaCard />
                </Box>
            )}
        </div >
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

export default function BasicTabs(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderColor: 'divider', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Phòng" {...a11yProps(0)} />
                    <Tab label="Bàn" {...a11yProps(1)} />
                    <Tab label="Thực đơn" {...a11yProps(2)} />
                </Tabs>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Input
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        }
                    />
                    <BoltIcon className='rounded-icon' sx={{ marginRight: '10px' }} />
                    <AddIcon className='rounded-icon' />
                </Box>
            </Box>
            <CustomTabPanel value={value} index={0} ></CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Bàn
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Thực đơn
            </CustomTabPanel>
        </Box >
    );
}