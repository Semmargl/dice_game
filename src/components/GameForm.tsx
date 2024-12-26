import React from 'react';

import { Box, Button, RadioGroup, FormControlLabel, Radio, Slider } from '@mui/material';
import { useGameStore } from '../state/Game';

const GameForm: React.FC = () => {
  const threshold = useGameStore((state) => state.threshold);
  const isGreater = useGameStore((state) => state.isGreater);
  const setThreshold = useGameStore((state) => state.setThreshold);
  const setIsGreater = useGameStore((state) => state.setIsGreater);
  const playGame = useGameStore((state) => state.playGame);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setThreshold(Array.isArray(newValue) ? newValue[0] : newValue);
  };

  return (
    <Box display="flex" flexDirection="column" gap={2} width={"320px"} margin={"0 auto"}>
      <RadioGroup
        row
        value={isGreater ? 'Over' : 'Under'}
        onChange={(e) => setIsGreater(e.target.value === 'Over')}
        style={{margin: '0 auto'}}
      >
        <FormControlLabel value="Under" control={<Radio />} label="Under" />
        <FormControlLabel value="Over" control={<Radio />} label="Over" />
      </RadioGroup>
   
      <Slider
        value={threshold}
        onChange={handleSliderChange}
        step={1}
        min={0}
        max={100}
        valueLabelDisplay="auto"
      />
      <Button variant="contained" color="primary" onClick={playGame}>
        Play
      </Button>
    </Box>
  );
};

export default GameForm;