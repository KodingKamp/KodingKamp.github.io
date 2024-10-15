import { Box, Typography } from '@mui/material';

const Title = ({
  className,
  children,
  ...containerProps
}) => (
  <Box {...containerProps} className={className}>
    <Typography variant='h1' fontSize='6vw'>Kamp Duong</Typography>
    <Typography variant='subtitle1'>Software Engineer</Typography>
  </Box>
);

export default Title;
