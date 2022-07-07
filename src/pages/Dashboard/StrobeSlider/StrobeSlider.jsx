import React from 'react';
import { makeStyles } from '@mui/styles';
import { Slider } from 'components';

const useStyles = makeStyles({
  strobeSlider: {
    borderTop: '1px solid white'
  }
});

const StrobeSlider = ({ value }) => {
  const styles = useStyles();

  return (
    <div className={styles.strobeSlider}>
      <Slider value={value} min={0} max={127} valueLabel="Strobe speed"/>
    </div>
  )
};

export default StrobeSlider;