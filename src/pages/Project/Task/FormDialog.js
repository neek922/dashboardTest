import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import onAddTask from './onAddTask.js';
import Typography from '@material-ui/core/Typography';

export default function FormDialog({index}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const _onAddTask = React.useCallback((e) => onAddTask(e, index), [
    index,
  ]);

  const _handleClose = () => {
    setOpen(false);
    _onAddTask();
  };
  
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
       <Typography variant="body1" gutterBottom> + Добавить карточку</Typography>
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Добавить карточку</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="textFieldNameTasks"
            type="name"
            fullWidth
            color="secondary"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
           <Typography variant="body1" gutterBottom> Отменить</Typography>
          </Button>
          <Button onClick={_handleClose} color="secondary">
            <Typography variant="body1" gutterBottom>Добавить</Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}