import React from 'react';
import { makeStyles } from '@mui/styles';
import TrackBlock from "./TrackBlock";

const useStyles = makeStyles({
  tracksInfos: {
    height: '100%',
    width: '45%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

const TracksInfos = ({ activeTrack, tracks }) => {
  const styles = useStyles();

  return (
    <div className={styles.tracksInfos}>
      {Object.values(tracks).map(track => {
        const {
          modulation,
          mask,
          slicer,
          feedback,
          strobe,
          index,
          slider_value: sliderValue,
          slider_max_enabled: sliderMaxEnabled,
          time_scale: timeScale,
          is_on_group1,
          is_on_group2,
          is_on_group3
        } = track

        const groups = [!!is_on_group1, !!is_on_group2, !!is_on_group3];

        return (
          <TrackBlock
            key={`track-${index}`}
            index={index}
            isActive={activeTrack === index}
            modulation={modulation}
            mask={mask}
            slicer={slicer}
            feedback={feedback}
            strobe={strobe}
            sliderValue={sliderValue}
            sliderMaxEnabled={sliderMaxEnabled}
            timeScale={timeScale}
            groups={groups}
        />);
      })}
    </div>
  )
};

export default TracksInfos;