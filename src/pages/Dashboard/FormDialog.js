import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import onAddProject from './onAddProject.js';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div>
      <IconButton variant="outlined" color="primary" onClick={handleClickOpen}>
        <AddCircleOutlineIcon/>
      </IconButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Создать проект</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Введите название проекта!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="textFieldName"
            type="name"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Отменить
          </Button>
          <Button onClick={onAddProject} color="primary">
            Создать
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}