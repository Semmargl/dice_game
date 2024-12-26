import { useGameStore } from '../state/Game';
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';


const GameHistory: React.FC = () => {
  const history = useGameStore((state) => state.history);

  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  const getGuess = (threshold: number, isGreater: boolean) => {
    return isGreater ? `Over ${threshold}` : `Under ${threshold}`
  };

  const isWin = (roll: number, threshold: number, isGreater: boolean) => {
    if (isGreater) {
      return roll > threshold;
    } else {
      return roll < threshold;
    }   
  }
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Time</TableCell>
          <TableCell>Guess</TableCell>
          <TableCell>Result</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {history.map((entry, index) => (
          <TableRow key={index}>
            <TableCell>{formatTime(entry.timestamp)}</TableCell>
            <TableCell>
              {getGuess(entry.threshold, entry.isGreater)}
            </TableCell>
            <TableCell>
              <Typography color={isWin(entry.roll, entry.threshold, entry.isGreater) ? 'green' : 'red'}>{entry.roll}</Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default GameHistory;