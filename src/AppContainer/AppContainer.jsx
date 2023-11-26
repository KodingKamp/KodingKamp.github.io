import { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { HomePage } from '../Projects';
import Tab from '@mui/material/Tab'; // eslint-disable-line no-unused-vars
import Tabs from '@mui/material/Tabs';
import './AppContainer.scss';

const AppContainer = () => {
  // state
  const [selectedTab, setTab] = useState(-1);

  // variables
  const activeTabComponent = useMemo(
    () => {
      switch (selectedTab) {
        case -1:
        default:
          return <HomePage />
      }
    },
    [selectedTab]
  )

  // functions
  const handleTabChange = (_, tab) => {
    setTab(tab);
  }

  // effects

  // views
  return (
    <Box id='app-container'>
      <Box className='navbar'>
        <Box>
          <Button
            disableRipple
            color='inherit'
            onClick={() => handleTabChange(null, -1)}
          >
            Koding Kamp
          </Button>
        </Box>
        <Tabs
          variant='scrollable'
          aria-label='scrollable nav links'
          textColor='inherit'
          value={selectedTab}
          onChange={handleTabChange}
        >
          {/* <Tab label='One' /> */}
          {/* <Tab label='Two' /> */}
          {/* <Tab label='Three' /> */}
          {/* <Tab label='Four' /> */}
          {/* <Tab label='Five' /> */}
          {/* <Tab label='Six' /> */}
          {/* <Tab label='Seven' /> */}
          {/* <Tab label='Eight' /> */}
          {/* <Tab label='Nine' /> */}
          {/* <Tab label='Ten' /> */}
          {/* <Tab label='Eleven' /> */}
          {/* <Tab label='Twelve' />/ */}
          {/* <Tab label='Thirteen' /> */}
          {/* <Tab label='Forteen' /> */}
          {/* <Tab label='Fifteen' /> */}
          {/* <Tab label='Sixteen' /> */}
          {/* <Tab label='Seventeen' /> */}
          {/* <Tab label='Eighteen' /> */}
          {/* <Tab label='Nineteen' /> */}
          {/* <Tab label='Twenty' /> */}
          {/* <Tab label='Twenty-One' /> */}
          {/* <Tab label='Twenty-Two' /> */}
          {/* <Tab label='Twenty-Three' /> */}
          {/* <Tab label='Twenty-Four' /> */}
          {/* <Tab label='Twenty-Five' /> */}
        </Tabs>
      </Box>
      <Box className='content'>
        {activeTabComponent}
      </Box>
    </Box>
  );
};

export default AppContainer;
