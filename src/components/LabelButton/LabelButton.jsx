import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  labelButton: {
    maxWidth: '60px',
    textAlign: 'center',
    padding: '4px 8px',
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  labelButtonToggled: {
    background: 'green'
  },
  labelButtonUntoggled: {
    background: 'grey'
  }
});

const LabelButton = ({ label, isToggled }) => {
  const styles = useStyles();
  const [labelValue, setLabelValue] = useState(label);

  return (
    <div className={`${isToggled ? styles.labelButtonToggled : styles.labelButtonUntoggled} ${styles.labelButton}`}>
      {labelValue}
    </div>
  );
};

LabelButton.propTypes = {
  label: PropTypes.string,
  isToggled: PropTypes.bool
};

LabelButton.defaultProps = {
  label: 'Label',
  isToggled: false
}

export default LabelButton;