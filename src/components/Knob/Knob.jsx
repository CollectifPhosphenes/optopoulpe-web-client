import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  knobContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  knobLabel:{
    marginBottom: '4px',
    fontSize: '18px',
    maxHeight: '18px'
  },
  knob: {
    width: '50px',
    height: '50px',
    overflow: 'hidden',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '18px'
  },
  smallKnob: {
    width: '25px',
    height: '25px',
    overflow: 'hidden',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '14px'
  },
  toggled: {
    background: 'lightblue',
  }
});

const Knob = ({ value, label, isToggled, size }) => {
  const styles = useStyles();

  return (
    <div className={styles.knobContainer}>
      <div className={styles.knobLabel}>{label}</div>
      <div className={`
        ${isToggled ? styles.toggled : ''} 
        ${size === 'regular' ? styles.knob : styles.smallKnob}`}
      >
        {value}
      </div>
    </div>
  )
};

Knob.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
  size: PropTypes.oneOf(['small', 'regular'])
};

Knob.defaultProps = {
  value: '',
  label: '',
  size: 'regular'
}

export default Knob;