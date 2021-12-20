import React from 'react';
import {  Button,
          TextField,
          Dialog,
          DialogActions,
          DialogContent,
          DialogContentText,
          DialogTitle,
          IconButton,  } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import onAddProject from './onAddProject.js';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    
  };
  const _onAddProject = () => {
    setOpen(false);
    onAddProject();
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
          <Button onClick={_onAddProject} color="primary">
            Создать
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}