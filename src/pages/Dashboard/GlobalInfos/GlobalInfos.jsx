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
  currentTrackLabel: {
    fontWeight: 'bold',
    fontSize: '100px',
    textAlign: 'center',
    marginBottom: '16px',
    color: 'red',
    backgroundColor: '#30363d',
    padding: '15px',
  },
  bpmLabel: {
    fontWeight: 'bold',
    fontSize: '30px',
    textAlign: 'center',
    marginBottom: '16px',
      color: 'black',
  },

});

const GlobalInfos = ({ activeTrack, bpm }) => {
  const styles = useStyles();

  return (
    <div className={styles.globalInfos}>
      <p className={styles.currentTrackLabel}>{activeTrack.index+1}</p>
      <p className={styles.bpmLabel}>BPM<br/>{bpm}</p>
    </div>
  );
};

GlobalInfos.propTypes = {
  activeTrack: PropTypes.shape().isRequired,
  bpm: PropTypes.number.isRequired
};

export default GlobalInfos;