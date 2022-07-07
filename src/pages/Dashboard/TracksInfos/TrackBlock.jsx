import React from 'react';
import { makeStyles } from '@mui/styles';
import {LabelButton, ToggleButton} from 'components';
import OSCILLATORS from "../constants";

const useStyles = makeStyles({
  label: {
    fontWeight: 300,
    fontSize: '10px'
  },
  values: {
    fontWeight: 'bold',
    fontSize: '12px'
  },
  trackBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    border: '1px solid black',
    padding: '8px',
    width: '320px',
    position: 'relative'
  },
  trackIndex: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    fontSize: '34px',
    fontWeight: 'bold'
  },
  upperBlock: {
    marginBottom: '16px',
    display: 'flex',
    flexDirection: 'column',

    '& div': {
      marginBottom: '2px',
      marginRight: '4px',
      display: 'flex'
    }
  },
  lowerBlock: {
    display: 'flex',

    '& div': {
      marginRight: '4px'
    }
  },
  timeScale: {
    position: 'absolute',
    top: 8,
    right: 4,
    fontSize: '12px',
    textAlign: 'right'
  },
});

const TrackBlock = ({
  index,
  modulation,
  mask,
  slicer,
  feedback,
  strobe,
  sliderValue, // TODO: Adds gradient background
  sliderMaxEnabled, // TODO: Adds gradient background,
  timeScale,
  groups
}) => {
  const styles = useStyles();
  const [isGroupOne, isGroupTwo, isGroupThree] = groups;

  return (
    <div className={styles.trackBlock}>
      <div className={styles.upperBlock}>
        {/* Modulation Row */}
        <div>
          <ToggleButton
            children={modulation.label}
            isToggled={modulation.enabled}
          />
          <ToggleButton
            children={OSCILLATORS[modulation.oscillator_track]}
            isToggled={modulation.enabled}
          />
          <ToggleButton
            children={
              <p className={styles.values}>
                <span className={styles.label}>Offset:</span> {modulation.color_palette.offset}
              </p>
            }
            isToggled={modulation.enabled}
          />
          <ToggleButton
            children={
            <p className={styles.values}>
              <span className={styles.label}>Width:</span> {modulation.color_palette.width}
            </p>
            }
            isToggled={modulation.enabled}
          />
        </div>
        {/* Mask Row */}
        <div>
          <ToggleButton
            children={mask.label}
            isToggled={mask.enabled}
          />
          <ToggleButton
            children={OSCILLATORS[mask.oscillator_track]}
            isToggled={mask.enabled}
          />
          <ToggleButton
            children={
              <p className={styles.values}>
                <span className={styles.label}>Length:</span> {mask.length}
              </p>
            }
            isToggled={mask.enabled}
          />
        </div>
        {/* Slicer Row */}
        <div>
          <ToggleButton
            children={slicer.label}
            isToggled={slicer.enabled}
          />
          <ToggleButton
            children={
              <p className={styles.values}>
                <span className={styles.label}>Count:<br/></span> {slicer.slices_value}
              </p>
            }
            isToggled={slicer.enabled}
          />
          <ToggleButton
            children={
              <p className={styles.values}>
                <span className={styles.label}>Length:</span> {slicer.uneven_value}
              </p>
            }
            isToggled={slicer.enabled}
          />
        </div>
        {/* Feedback Row */}
        <div>
          <ToggleButton
            children={feedback.label}
            isToggled={feedback.enabled}
          />
          <ToggleButton
            children={
              <p className={styles.values}>
                <span className={styles.label}>Amount:</span> {feedback.value}
              </p>
            }
            isToggled={feedback.enabled}
          />
        </div>
        {/* Strobe Row */}
        <div>
          <ToggleButton
            children={strobe.label}
            isToggled={strobe.enabled}
          />
        </div>
      </div>
      <div className={styles.lowerBlock}>
        <LabelButton label="Label 1" isToggled={isGroupOne}/>
        <LabelButton label="Label 2" isToggled={isGroupTwo}/>
        <LabelButton label="Label 3" isToggled={isGroupThree}/>
      </div>
      <div className={styles.trackIndex}>
        {index+1}
      </div>
      <div className={styles.timeScale}>
        Time scale: <br/>
        {timeScale}
      </div>
    </div>
  );
}

export default TrackBlock;