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
    padding: '4px',
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
      <Knob label={modulation.enabled ? OSCILLATORS[modulation.oscillator_track] : "Palette Offset"} isToggled={modulation.enabled} value={modulation.enabled ? '' : modulation.color_palette.offset} horizontalFill={true}/>
      <Knob label={OSCILLATORS[mask.oscillator_track]} isToggled={mask.enabled}/>
      <Knob label={"Subd. count"} value={slicer.slices_value} horizontalFill={true} isToggled={!slicer.enabled}/>
      <Knob label="Feedback" value={feedback.value} isToggled={feedback.enabled} horizontalFill={true} />
      <Knob label="Palette Width" value={modulation.color_palette.width} horizontalFill={true} isToggled={modulation.enabled}/>
      <Knob label="Length" value={mask.length} horizontalFill={true} isToggled={mask.enabled}/>
      <Knob label="Subd. length" value={slicer.uneven_value} horizontalFill={true} isToggled={slicer.enabled}/>
      <Knob label="Timescale" value={timeScale} horizontalFill={true} isToggled/>
    </div>
  );
};

export default KnobsInfos;