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
import ButtonColorTest from './ButtonColorTest';

export default function FormDialog({userId}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    
  };
  const _onAddProject = (e) => {
    
    setOpen(false);
    onAddProject(e, userId);
  };
  
  return (
    <div>
      <IconButton variant="outlined" color="primary" onClick={handleClickOpen}>
        <AddCircleOutlineIcon/>
      </IconButton>
      <Dialog maxWidth='xs' open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
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
          <DialogContentText>
            Фон
          </DialogContentText>
          <ButtonColorTest/>
        </DialogContent>
        <div style={{height: '100px', width: '300px'}}>
        </div>
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