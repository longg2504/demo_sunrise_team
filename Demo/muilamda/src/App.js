import './App.css';
import { Box, Button, Grid, Stack, Tab, Tabs, TextField } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import CustomTabPanel from './components/BasicTabs';
function App() {
  return (
    <>
      <Box className='background-container'>
        <Grid container spacing={2} className='background-app custom-mui-grid-container' sx={{ width: '100%' }} >
          <Grid item xs={6} md={7}>
            <CustomTabPanel />
          </Grid>
          <Grid item xs={6} md={5}>
            <Box sx={{ width: '100%', typography: 'body1' }}>
              <TabContext>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList aria-label="lab API tabs example">
                    <Tab label="Phòng" value="1" />
                    <Tab label="Item Three" value="3" />
                  </TabList>
                </Box>
                <TabPanel value="1">Phòng</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
              </TabContext>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
