import React from 'react';
import { Typography } from '@mui/material';
import { useGameStore } from '../state/Game';

const DiceResult: React.FC = () => {
  const roll = useGameStore((state) => state.roll);

  return (
    <Typography variant="h1">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '200px',
          width: '320px',
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
          margin: '0 auto'
        }}
      >{roll}</div>
    </Typography>
  );
};

export default DiceResult;