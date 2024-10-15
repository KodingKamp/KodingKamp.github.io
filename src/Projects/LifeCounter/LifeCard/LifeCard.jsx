import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const LifeCard = ({
  lifePoints,
  playerName,
  playerIndex,
  updatePlayerLifePoints,
  resetPlayerLifePoints,
  removePlayer,
  canRemovePlayer
}) => {
  // state

  // variables

  // functions
  const handleUpdatePlayerLifePoints = (adjustmentValue) => () => {
    updatePlayerLifePoints(playerIndex, adjustmentValue);
  };

  const handleResetPlayerLifePoints = () => {
    resetPlayerLifePoints(playerIndex);
  };

  const handleRemovePlayer = () => {
    removePlayer(playerIndex);
  };

  // effects

  return (
    <Card className='life-card'>
      <CardHeader
        title={playerName}
        action={<Box>
          <Button onClick={handleResetPlayerLifePoints}>reset</Button>
          {canRemovePlayer &&
            <Button onClick={handleRemovePlayer}>remove</Button>
          }
        </Box>}
      />

      <CardContent className='card-content'>
        <Stack spacing={1}>
          <Button variant='outlined' onClick={handleUpdatePlayerLifePoints(-1)}>-1</Button>
          <Button variant='outlined' onClick={handleUpdatePlayerLifePoints(-5)}>-5</Button>
          <Button variant='outlined' onClick={handleUpdatePlayerLifePoints(-10)}>-10</Button>
        </Stack>

        <Typography className='life-point-value'>
          {lifePoints}
        </Typography>

        <Stack spacing={1}>
          <Button variant='outlined' onClick={handleUpdatePlayerLifePoints(1)}>+1</Button>
          <Button variant='outlined' onClick={handleUpdatePlayerLifePoints(5)}>+5</Button>
          <Button variant='outlined' onClick={handleUpdatePlayerLifePoints(10)}>+10</Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default LifeCard;
