import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  toggleButton: {
    width: '40px',
    height: '15px',
    textAlign: 'center',
    padding: '4px 8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
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
  toggleButtonNotOnMaster: {},
  toggleButtonSelected: {
    border: '2.5px solid black',
  },
  toggleButtonNotSelected: {
    border: '1px solid black',
  }
});

const ToggleButton = ({ isToggled, isOnMaster, isSelected, children }) => {
  const styles = useStyles();
  return (
    <div className={`${isToggled ? styles.toggleButtonToggled : styles.toggleButtonUnToggled} ${isOnMaster ? styles.toggleButtonOnMaster : styles.toggleButtonNotOnMaster} ${isSelected ? styles.toggleButtonSelected : styles.toggleButtonNotSelected} ${styles.toggleButton}`}>
      {children}
    </div>
  );
};

ToggleButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  isToggled: PropTypes.bool,
  isOnMaster: PropTypes.bool,
  isSelected: PropTypes.bool,
}

ToggleButton.defaultProps = {
  children: null,
  isToggled: false,
  isOnMaster: false,
  isSelected: false,
}

export default ToggleButton;