import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  actionsLogs: {
    width: '99%',
    height: '200px',
    border: '1px solid white',
    marginBottom: '8px',
    padding: '8px'
  }
});

const ActionsLogs = () => {
  const styles = useStyles();

  return (
    <div className={styles.actionsLogs}>
      Coucou logs
    </div>
  );
};

export default ActionsLogs;