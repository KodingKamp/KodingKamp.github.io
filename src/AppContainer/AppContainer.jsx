import { useCallback, useState } from 'react';
import { Box } from '@mui/material';
import { Contact, Portrait, Social, Title } from '../Modules';

const AppContainer = () => {
  // state
  const [focusComponent, setFocusComponent] = useState(null);

  const handleFocusContent = useCallback((contentName) =>
    () => {
      setFocusComponent(contentName);
    }, []
  );

  // variables
  const components = {
    Details: 'Details',
    Experience: 'Experience',
    Skills: 'Skills',
    Projects: 'Projects',
  };

  return (
    <Box id='app-container'>
      <Portrait className="module" gridRow='span 2' />
      <Title className="module expandable" gridColumn='span 2' onClick={handleFocusContent(components.Details)} />
      <Box className="module" gridRow='span 2' onClick={handleFocusContent()}>
        Experience / Education
      </Box>
      <Box className="module no-bg" gridRow='span 2' gridColumn='span 2' onClick={handleFocusContent()}>
        Project slideshow
      </Box>
      <Box className="module" gridRow='span 2' onClick={handleFocusContent()}>

      </Box>
      <Box className="module" gridRow='span 2' onClick={handleFocusContent()}>
        Skills
      </Box>
      <Contact className="module" onClick={handleFocusContent()} />
      <Social className="module" onClick={handleFocusContent()} />
    </Box>
  );
};

export default AppContainer;
