import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  toggleButton: {
    width: '40px',
    height: '15px',
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
  toggleButtonUnToggled: {
    background: 'grey'
  },
  toggleButtonOnMaster: {
      background: 'lightblue'
  },
  toggleButtonNotOnMaster: {}
});

const ToggleButton = ({ isToggled, isOnMaster, children }) => {
  const styles = useStyles();
  return (
    <div className={`${isToggled ? styles.toggleButtonToggled : styles.toggleButtonUnToggled} ${isOnMaster ? styles.toggleButtonOnMaster : styles.toggleButtonNotOnMaster} ${styles.toggleButton}`}>
      {children}
    </div>
  );
};

ToggleButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  isToggled: PropTypes.bool,
  isOnMaster: PropTypes.bool
}

ToggleButton.defaultProps = {
  children: null,
  isToggled: false,
  isOnMaster: false,
}

export default ToggleButton;