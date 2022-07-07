import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  toggleButton: {
    maxWidth: '60px',
    height: '30px',
    textAlign: 'center',
    padding: '4px 8px',
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  toggleButtonToggled: {
    background: 'green'
  },
  labelButtonUnToggled: {
    background: 'grey'
  }
});

const ToggleButton = ({ isToggled, children }) => {
  const styles = useStyles();
  return (
    <div className={`${isToggled ? styles.labelButtonToggled : styles.labelButtonUntoggled} ${styles.toggleButton}`}>
      {children}
    </div>
  );
};

ToggleButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  isToggled: PropTypes.bool
}

ToggleButton.defaultProps = {
  children: null,
  isToggled: false
}

export default ToggleButton;