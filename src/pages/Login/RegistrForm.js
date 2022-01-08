import React from 'react';
import {  Button,
          TextField,
          Dialog,
          DialogActions,
          DialogContent,
          DialogContentText,
          DialogTitle,
          IconButton,  } from '@material-ui/core';
import onAddUser from './onAddUser.js';


export default function RegistrForm() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    
  };
  const _onAddUser = (e) => {
    
    setOpen(false);
    onAddUser(e);
  };
  
  return (
    <div>
      <Button onClick={handleClickOpen} color="primary">Sign Up</Button>
      <Dialog maxWidth='xs' open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Регистрация</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Введите логин!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="textRegFormLogin"
            type="name"
            fullWidth
          />
          <DialogContentText>
            Введите пароль!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="textRegFormPassword"
            type="name"
            fullWidth
          />
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Отменить
          </Button>
          <Button onClick={_onAddUser} color="primary">
            Создать
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}