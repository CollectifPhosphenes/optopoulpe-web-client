import React from 'react';
import { makeStyles } from '@mui/styles';
import {LabelButton, ToggleButton} from 'components';
import { OSCILLATORS } from "../constants";

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
  active: {
    color: 'red'
  }
});

const TrackBlock = ({
  index,
  isActive,
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
          <ToggleButton isToggled={modulation.enabled}>{modulation.label}</ToggleButton>
          <ToggleButton isToggled={modulation.enabled}>{OSCILLATORS[modulation.oscillator_track]}</ToggleButton>
          <ToggleButton isToggled={modulation.enabled}>
            <p className={styles.values}>
              <span className={styles.label}>Offset:</span> {modulation.color_palette.offset}
            </p>
          </ToggleButton>
          <ToggleButton isToggled={modulation.enabled}>
            <p className={styles.values}>
              <span className={styles.label}>Width:</span> {modulation.color_palette.width}
            </p>
          </ToggleButton>
        </div>
        {/* Mask Row */}
        <div>
          <ToggleButton isToggled={mask.enabled}>{mask.label}</ToggleButton>
          <ToggleButton isToggled={mask.enabled}>{OSCILLATORS[mask.oscillator_track]}</ToggleButton>
          <ToggleButton isToggled={mask.enabled}>
            <p className={styles.values}>
              <span className={styles.label}>Length:</span> {mask.length}
            </p>
          </ToggleButton>
        </div>
        {/* Slicer Row */}
        <div>
          <ToggleButton isToggled={slicer.enabled}>{slicer.label}</ToggleButton>
          <ToggleButton isToggled={slicer.enabled}>
            <p className={styles.values}>
              <span className={styles.label}>Count:<br/></span> {slicer.slices_value}
            </p>
          </ToggleButton>
          <ToggleButton isToggled={slicer.enabled}>
            <p className={styles.values}>
              <span className={styles.label}>Length:</span> {slicer.uneven_value}
            </p>
          </ToggleButton>
        </div>
        {/* Feedback Row */}
        <div>
          <ToggleButton isToggled={feedback.enabled}>{feedback.label}</ToggleButton>
          <ToggleButton isToggled={feedback.enabled}>
            <p className={styles.values}>
              <span className={styles.label}>Amount:</span> {feedback.value}
            </p>
          </ToggleButton>
        </div>
        {/* Strobe Row */}
        <div>
          <ToggleButton isToggled={strobe.enabled}>
            {strobe.label}
          </ToggleButton>
        </div>
      </div>
      <div className={styles.lowerBlock}>
        <LabelButton label="Label 1" isToggled={isGroupOne}/>
        <LabelButton label="Label 2" isToggled={isGroupTwo}/>
        <LabelButton label="Label 3" isToggled={isGroupThree}/>
      </div>
      <div className={styles.trackIndex}>
        <p className={isActive ? styles.active : ''}>{index+1}</p>
      </div>
      <div className={styles.timeScale}>
        Time scale: <br/>
        {timeScale}
      </div>
    </div>
  );
}

export default TrackBlock;