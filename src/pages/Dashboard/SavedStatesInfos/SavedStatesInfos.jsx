import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  savedStatesInfos: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: '1'
  }
});

const SavedStatesInfos = ({ currentSaveState }) => {
  const styles = useStyles();

  return (
    <div className={styles.savedStatesInfos}>
      {currentSaveState}
    </div>
  )
};

export default SavedStatesInfos;