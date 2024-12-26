import { useEffect, useState } from "react";
import { Snackbar, Alert } from '@mui/material';
import { useGameStore } from "@/state/Game";

const Message: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState<'success' | 'error'>('success');
  const history = useGameStore((state) => state.history);

  useEffect(() => {
    if (history.length > 0) {
      const { roll, threshold, isGreater } = history[0];
      const isWin = isGreater ? roll > threshold : roll < threshold;
      setMessage(isWin ? 'You won' : 'You lost');
      setSeverity(isWin ? 'success' : 'error');
      setOpen(true);
    }
  }, [history]);

  const handleClose = () => {
    setOpen(false);
  };
  
  return ( 
    <Snackbar
    open={open}
    autoHideDuration={3000}
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
  >
    <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
      {message}
    </Alert>
  </Snackbar>
  )
}

export default Message;