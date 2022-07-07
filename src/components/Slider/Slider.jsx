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
    padding: '8px 16px'
  }
});

const Slider = ({ value, valueLabel, min, max }) => {
  const styles = useStyles();

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.displayValue}>
        {value} {valueLabel && (`- ${valueLabel}`)}
      </div>
      <input
        className={styles.slider}
        type="range"
        min={min}
        max={max}
        value={value}
        readOnly
      />
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
  max: 200,
  valueLabel: ''
}

export default Slider;