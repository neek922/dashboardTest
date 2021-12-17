import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import onAddTask from './onAddTask.js';

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
  
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        + Добавить карточку
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
            Отменить
          </Button>
          <Button onClick={_onAddTask} color="secondary">
            Добавить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}