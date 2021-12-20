import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import onEdit from './onEdit.js';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

export default function FormDialog({index, value}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const _onEdit = React.useCallback((e) => onEdit(e, index), [
    index,
  ]);

  const _handleClose = () => {
    setOpen(false);
    _onEdit();
  };
  
  return (
    <div>
      <Button color="primary" onClick={handleClickOpen}>
       <Typography variant="body1" gutterBottom>{value}</Typography>
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Изменить</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="textFieldNameTasksEdit"
            type="name"
            defaultValue={value}
            fullWidth
            color="secondary"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
           <Typography variant="body1" gutterBottom>Отменить</Typography>
          </Button>
          <Button onClick={_handleClose} color="secondary">
            <Typography variant="body1" gutterBottom>Изменить</Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}