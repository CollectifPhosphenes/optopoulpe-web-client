import React from 'react';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  globalInfos: {
    width: '100px',
    height: '99%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'darkgrey',
    border: '1px solid black'
  },
  globalInfosLabel: {
    fontWeight: 'bold',
    fontSize: '28px',
    textAlign: 'center',
    marginBottom: '16px'
  }
});

const GlobalInfos = ({ activeTrack, bpm }) => {
  const styles = useStyles();

  return (
    <div className={styles.globalInfos}>
      <p className={styles.globalInfosLabel}>Active Track :<br/>{activeTrack.index+1}</p>
      <p className={styles.globalInfosLabel}>BPM :<br/>{bpm}</p>
    </div>
  );
};

GlobalInfos.propTypes = {
  bpm: PropTypes.number.isRequired
};

export default GlobalInfos;