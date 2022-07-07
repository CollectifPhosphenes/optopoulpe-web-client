import React from 'react';
import { makeStyles } from '@mui/styles';
import { Slider } from 'components';

const useStyles = makeStyles({
  strobeSlider: {}
});

const StrobeSlider = ({ value }) => {
  const styles = useStyles();

  return (
    <div className={styles.strobeSlider}>
      <Slider value={value} min={0} max={127}/>
    </div>
  )
};

export default StrobeSlider;