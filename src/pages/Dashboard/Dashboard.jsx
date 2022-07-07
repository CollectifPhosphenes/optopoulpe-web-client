import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions';
import TracksInfos from './TracksInfos';
import GlobalInfos from './GlobalInfos';
import KnobsInfos from "./KnobsInfos";
import ActionsLogs from "./ActionsLogs";
import StrobeSlider from "./StrobeSlider";
import ColorPalette from "./ColorPalette";
import {API_FETCH_INTERVAL} from "./constants";
import SavedStatesInfos from "./SavedStatesInfos";

const useStyles = makeStyles({
  dashboard: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  dashboardRight: {
    flexGrow: '0.95',
    height: '100%',
    marginLeft: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  dashboardRightUpper: {
    display: 'flex',
    height: '350px'
  },
  dashboardRightUpperLeft: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid white',
    justifyContent: 'space-between',
    marginBottom: '8px'
  },
  colorPaletteContainer: {
    marginLeft: '4px',
    marginBottom: '8px',
    flexGrow: 1
  }
});

const Dashboard = () => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const bpm = useSelector(state => state.global.bpm);
  const currentTrack = useSelector(state => state.global.current_selected_track_index);
  const strobeSpeed = useSelector (state => state.global.strobe_speed);
  const currentSaveState = useSelector (state => state.global.used_save);
  const tracks = useSelector(state => state.tracks);
  const url = useSelector(state => state.app.url);
  const logs = useSelector(state => state.logs);

  let intervalId;

  useEffect(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }

    if (url) {
      intervalId = setInterval(() => dispatch(fetchData(url)), API_FETCH_INTERVAL);
    } else {
      clearInterval(intervalId);
    }
  }, [dispatch, fetchData, url]);

  const modulations = tracks ?
    Object.values(tracks).reduce((prev, current) => [...prev, current.modulation], []):
    [];

  return (
    <div className={styles.dashboard}>
      {(url && !!Object.values(tracks).length) && (
        <>
          <TracksInfos activeTrack={currentTrack} tracks={tracks} />
          <GlobalInfos activeTrack={tracks[currentTrack]} bpm={bpm} />
          <div className={styles.dashboardRight}>
            <div className={styles.dashboardRightUpper}>
              <div className={styles.dashboardRightUpperLeft}>
                <SavedStatesInfos currentSaveState={currentSaveState} />
                <StrobeSlider value={strobeSpeed}/>
              </div>
              <div className={styles.colorPaletteContainer}>
                <ColorPalette activeTrackIndex={currentTrack} modulations={modulations} />
              </div>
            </div>
            <ActionsLogs logs={logs}/>
            <KnobsInfos activeTrack={tracks[currentTrack]}/>
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;