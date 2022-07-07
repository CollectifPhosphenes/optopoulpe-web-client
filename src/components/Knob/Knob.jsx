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
    paddingBottom: '8px'
  },
  knob: {
    width: '50px',
    height: '50px',
    overflow: 'hidden',
    borderRadius: '50%',
    background: 'lightblue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid'
  }
});

const Knob = ({ value, label }) => {
  const styles = useStyles();

  return (
    <div className={styles.knobContainer}>
      <div className={styles.knobLabel}>{label}</div>
      <div className={styles.knob}>
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
  value: 0,
  label: ''
}

export default Knob;