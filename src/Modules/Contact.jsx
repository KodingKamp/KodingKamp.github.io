import { Box, Typography } from '@mui/material';

const Contact = ({
  className,
  children,
  ...containerProps
}) => (
  <Box {...containerProps} className={className}>
    <Typography>
      Contact number: <a href='tel:239-900-6345'>239-900-6345</a>
    </Typography>
    <Typography>
      Email: <a href='mailto:kodingkamp@gmail.com'>kodingkamp@gmail.com</a>
    </Typography>
  </Box >
);

export default Contact;
