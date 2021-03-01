import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import AddIcon from '@material-ui/icons/Add';

type SimpleDialogProps = {
  onClose: (selectedValue: string) => void,
  open: boolean,
  selectedValue: string,
  emails: string[],
};

const SimpleDialog = (props: SimpleDialogProps): JSX.Element => {
  const {
    onClose, emails, selectedValue, open,
  } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Add books</DialogTitle>
      <List>
        {emails.map((email) => (
          <ListItem button onClick={() => handleListItemClick(email)} key={email}>
            <AddIcon />
            <ListItemText primary={email} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};

export default SimpleDialog;
