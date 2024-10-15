import { Box } from '@mui/material';

const Social = ({
  className,
  children,
  ...containerProps
}) => (
  <Box {...containerProps} className={className}>
    LinkedIn
    Github
  </Box>
);

export default Social;
