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
    border: '1px solid'
  },
  toggled: {
    background: 'lightblue',
  }
});

const Knob = ({ value, label, isToggled }) => {
  const styles = useStyles();

  return (
    <div className={styles.knobContainer}>
      <div className={styles.knobLabel}>{label}</div>
      <div className={`${isToggled ? styles.toggled : ''} ${styles.knob}`}>
        {value}
      </div>
    </div>
  )
};

Knob.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node])
};

Knob.defaultProps = {
  value: '',
  label: ''
}

export default Knob;