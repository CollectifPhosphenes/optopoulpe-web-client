import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions';
import TracksInfos from "./TracksInfos";

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

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch, fetchData]);

  return (
    <div className={styles.dashboard}>
      <TracksInfos tracks={tracks} />
    </div>
  );
}

export default Dashboard;