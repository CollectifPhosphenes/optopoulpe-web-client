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
    marginBottom: '10px',
    flexGrow: 1,
    alignSelf: 'flex-end',
    height: '300px'
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

  useEffect(() => {
    if (url) {
      setInterval(() => dispatch(fetchData(url)), API_FETCH_INTERVAL);
    }
  }, [dispatch, fetchData, url]);

  return (
    <div className={styles.dashboard}>
      {(url && !!Object.values(tracks).length) && (
        <>
          <TracksInfos tracks={tracks} />
          <GlobalInfos activeTrack={tracks[currentTrack]} bpm={bpm} />
          <div className={styles.dashboardRight}>
            <div className={styles.dashboardRightUpper}>
              <div className={styles.dashboardRightUpperLeft}>
                <SavedStatesInfos currentSaveState={currentSaveState} />
                <StrobeSlider value={strobeSpeed}/>
              </div>
              <div className={styles.colorPaletteContainer}>
                <ColorPalette />
              </div>
            </div>
            <ActionsLogs />
            <KnobsInfos activeTrack={tracks[currentTrack]}/>
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;