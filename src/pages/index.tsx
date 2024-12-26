import React from 'react';
import { Box, Container } from '@mui/material';
import GameForm from '../components/GameForm';
import DiceResult from '../components/DiceResult';
import GameHistory from '../components/GameHistory';
import Message from '@/components/Message';

const Home: React.FC = () => {
  return (
    <Container
      maxWidth="sm"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        gap={4}
        width="100%"
        maxWidth={600}
        padding={2}
        boxSizing="border-box"
      >
        <DiceResult />
        <GameForm />
        <GameHistory />
        <Message />
      </Box>
    </Container>
  );
};

export default Home;