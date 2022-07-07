import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions';
import TracksInfos from './TracksInfos';
import GlobalInfos from './GlobalInfos';
import {API_FETCH_INTERVAL} from "./constants";

const useStyles = makeStyles({
  dashboard: {
    width: '100%',
    height: '100%'
  }
});

const Dashboard = () => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const global = useSelector(state => state.global);
  const tracks = useSelector(state => state.tracks);
  const url = useSelector(state => state.app.url);

  useEffect(() => {
    if (url) {
      setInterval(() => dispatch(fetchData(url)), API_FETCH_INTERVAL);
    }
  }, [dispatch, fetchData, url]);

  return (
    <div className={styles.dashboard}>
      <TracksInfos tracks={tracks} />
      <GlobalInfos />
    </div>
  );
}

export default Dashboard;