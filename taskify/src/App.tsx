import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './features/tasks/TaskList';
import { Container, Typography } from '@mui/material';
import CounterPage from './features/CounterPage';

const App: React.FC = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Taskify
      </Typography>
      <TaskForm />
      <TaskList />
      <CounterPage/>
    </Container>
  );
};

export default App;
    