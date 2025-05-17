import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { increment, decrement } from './tasks/counterSlice';
import {
  Button,
  Typography,
  Stack,
  Paper,
  Snackbar,
  Alert,
} from '@mui/material';

const CounterPage: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);

  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMsg, setSnackMsg] = useState('');
  const [snackSeverity, setSnackSeverity] = useState<'info' | 'error'>('info');

  const handleIncrement = () => {
    if (count >= 20) {
      setSnackMsg('Maximum limit reached');
      setSnackSeverity('error');
      setSnackOpen(true);
      return;
    }
    dispatch(increment());
  };

  const handleDecrement = () => {
    if (count <= 0) {
      setSnackMsg('Minimum limit reached');
      setSnackSeverity('error');
      setSnackOpen(true);
      return;
    }
    dispatch(decrement());
  };

  const handleClose = () => {
    setSnackOpen(false);
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, maxWidth: 400, margin: '40px auto' }}>
      <Typography variant="h5" gutterBottom>
        Counter App
      </Typography>
      <Typography variant="h2" sx={{ mb: 3 }}>
        {count}
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button variant="contained" color="primary" onClick={handleIncrement}>
          Add
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleDecrement}>
          Remove
        </Button>
      </Stack>

      {/* Snackbar for limit message */}
      <Snackbar
        open={snackOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity={snackSeverity} sx={{ width: '100%' }}>
          {snackMsg}
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default CounterPage;
