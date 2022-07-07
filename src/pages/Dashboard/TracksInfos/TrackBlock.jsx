import React from 'react';
import { makeStyles } from '@mui/styles';
import {LabelButton, ToggleButton} from 'components';

const useStyles = makeStyles({
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

    '& div' : {
      marginBottom: '2px',
      display: 'flex'
    }
  },
  lowerBlock: {
    display: 'flex'
  }
});

const TrackBlock = ({
  index,
  modulation,
  mask,
  slicer,
  feedback,
  strobe,
  sliderValue,
  sliderMaxEnabled,
  groups
}) => {
  const styles = useStyles();
  const [isGroupOne, isGroupTwo, isGroupThree] = groups;

  return (
    <div className={styles.trackBlock}>
      <div className={styles.upperBlock}>
        <div>
          <ToggleButton
            children={modulation.label}
            isToggled={modulation.enabled}
          />
          <ToggleButton
            children="coucou"
            isToggled={modulation.enabled}
          />
          <ToggleButton
            children={modulation.color_palette.offset}
            isToggled={modulation.enabled}
          />
          <ToggleButton
            children={modulation.color_palette.width}
            isToggled={modulation.enabled}
          />
        </div>
        <div>
          <ToggleButton
            children={mask.label}
            isToggled={mask.enabled}
          />
        </div>
        <div>
          <ToggleButton
            children={slicer.label}
            isToggled={slicer.enabled}
          />
        </div>
        <div>
          <ToggleButton
            children={feedback.label}
            isToggled={feedback.enabled}
          />
        </div>
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
    </div>
  );
}

export default TrackBlock;