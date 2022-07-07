import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  labelButton: {
    maxWidth: '60px',
    textAlign: 'center',
    padding: '4px 8px'
  },
  labelButtonToggle: {
    background: 'green'
  },
  labelButtonUnToggled: {
    background: 'grey'
  }
});

const LabelButton = ({ label, isToggled }) => {
  const styles = useStyles();
  const [labelValue, setLabelValue] = useState(label);

  return (
    <div className={`${isToggled ? styles.labelButtonToggle : styles.labelButtonUnToggled} ${styles.labelButton}`}>
      {labelValue}
    </div>
  );
};

export default LabelButton;