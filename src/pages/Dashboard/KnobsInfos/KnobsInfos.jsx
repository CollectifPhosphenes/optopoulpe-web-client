import React from 'react';
import { makeStyles } from '@mui/styles';
import { Knob } from 'components';
import { OSCILLATORS } from "../constants";

const useStyles = makeStyles({
  knobsInfos: {
    width: '99%',
    height: '200px',
    alignItems: 'center',
    border: '1px solid white',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    gridColumnGap: '0px',
    gridRowGap: '8px',
    padding: '8px'
  }
});

const KnobsInfos = ({ activeTrack }) => {
  const styles = useStyles();
  const {
    modulation,
    mask,
    slicer,
    feedback,
    time_scale: timeScale
  } = activeTrack;

  return (
    <div className={styles.knobsInfos}>
      <Knob label={OSCILLATORS[modulation.oscillator_track]} isToggled={modulation.enabled}/>
      <Knob label={OSCILLATORS[mask.oscillator_track]} isToggled={mask.enabled}/>
      <Knob label={"Subd. count"} value={slicer.slices_value} isToggled={!slicer.enabled}/>
      <Knob label="Feedback" value={feedback.value} isToggled={feedback.enabled}/>
      <Knob label="Palette Width" value={modulation.color_palette.width} isToggled={modulation.enabled}/>
      <Knob label="Length" value={mask.length} isToggled={mask.enabled}/>
      <Knob label="Subd. length" value={slicer.uneven_value} isToggled={slicer.enabled}/>
      <Knob label="Timescale" value={timeScale} isToggled/>
    </div>
  );
};

export default KnobsInfos;