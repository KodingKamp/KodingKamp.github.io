import { useCallback, useEffect, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import LifeCard from './LifeCard/LifeCard';
import { Button, Card, CardContent, IconButton, Typography } from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material';

const INITIAL_LIFE_POINT_VALUE = 20;

const INITIAL_PLAYER_STATS = [
  { id: uuidv4(), name: 'Player1', lifePoints: INITIAL_LIFE_POINT_VALUE },
  { id: uuidv4(), name: 'Player2', lifePoints: INITIAL_LIFE_POINT_VALUE }
];

const LifeCounter = () => {
  // state
  const [playerStats, setPlayerStats] = useState(INITIAL_PLAYER_STATS);
  const [defaultLifePoints, setDefaultLifePoints] = useState(INITIAL_LIFE_POINT_VALUE);

  // variables
  const totalPlayers = useMemo(
    () => playerStats.length,
    [playerStats]
  );

  // functions
  const addPlayer = () => {
    setPlayerStats(prev => {
      return [...prev, { id: uuidv4(), name: `Player${totalPlayers + 1}`, lifePoints: defaultLifePoints }];
    });
  };

  const removePlayer = (playerIndex) => {
    setPlayerStats(prev => {
      let playerList = [...prev];
      playerList.splice(playerIndex, 1);
      return playerList;
    })
  };

  const resetAllLifePoints = useCallback(() => {
    setPlayerStats(prev => prev.map(playerStats => ({
      ...playerStats, lifePoints: defaultLifePoints
    })))
  }, [defaultLifePoints]);

  const resetPlayerLifePoints = useCallback((playerIndex) => {
    setPlayerStats(prev => {
      const stats = [...prev];
      stats[playerIndex].lifePoints = defaultLifePoints;
      return stats;
    })
  }, [defaultLifePoints]);

  const updateDefaultLifePoints = useCallback((newValue) => () => {
    setDefaultLifePoints(newValue);
  });

  const updatePlayerLifePoints = useCallback((playerIndex, adjustmentValue) => {
    setPlayerStats(prev => {
      const stats = [...prev];
      stats[playerIndex].lifePoints += adjustmentValue;
      return stats;
    });
  });

  // effects
  useEffect(() => {
    // reset states on dismount
    return () => {
      resetAllLifePoints();
      updateDefaultLifePoints(INITIAL_LIFE_POINT_VALUE);
    }
  }, []);

  return (
    <Box id='life-counter-component' className='component-container'>
      <Stack>
        <h1 id='component-title'>
          Life Counter App
        </h1>

        <Box id='life-counters-container'>
          {playerStats.map((player, idx) => (
            <LifeCard
              key={player.id}
              lifePoints={player.lifePoints}
              playerName={player.name}
              playerIndex={idx}
              updatePlayerLifePoints={updatePlayerLifePoints}
              resetPlayerLifePoints={resetPlayerLifePoints}
              removePlayer={removePlayer}
              canRemovePlayer={totalPlayers > 2}
            />
          ))}
          <Card>
            <CardContent className='add-player-card'>
              <Typography className='label'>
                Add Player
              </Typography>
              <Button onClick={addPlayer}>
                <AddCircleOutline fontSize='large'/>
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Stack>
    </Box>
  );
};

export default LifeCounter;
