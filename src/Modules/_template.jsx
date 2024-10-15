import { Box } from '@mui/material';

const Template = ({
  className,
  children,
  ...containerProps
}) => (
  <Box {...containerProps} className={className}>
    
  </Box>
);

export default Template;
