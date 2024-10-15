import { Box } from '@mui/material';

const Portrait = ({
  className,
  children,
  ...containerProps
}) => (
  <Box {...containerProps} className={className}
    sx={{
      backgroundImage: 'url("/assets/Portrait.jpg")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}
  />
);

export default Portrait;
