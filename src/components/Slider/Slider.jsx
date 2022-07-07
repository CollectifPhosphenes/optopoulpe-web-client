import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  displayValue: {},
  slider: {},
  sliderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    background: 'lightgrey',
    padding: '8px 16px'
  }
});

const Slider = ({ value, valueLabel }) => {
  const styles = useStyles();

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.displayValue}>
        {value} {valueLabel && (`- ${valueLabel}`)}
      </div>
      <input className={styles.slider} type="range" min="1" max="120" value={value} />
    </div>
  );
};

Slider.propTypes = {
  value: PropTypes.number.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  valueLabel: PropTypes.string
};

Slider.defaultProps = {
  min: 1,
  max: 180,
  valueLabel: ''
}

export default Slider;