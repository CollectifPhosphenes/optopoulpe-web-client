import React, {Fragment, useEffect, useRef} from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  actionsLogs: {
    width: '99%',
    height: '200px',
    overflowX: 'hidden',
    overflowY: 'scroll',
    border: '1px solid white',
    marginBottom: '8px',
    padding: '4px',
    fontSize: '14px',
    lineHeight: '20px'
  }
});

const ActionsLogs = ({ logs }) => {
  const styles = useStyles();
  const logRef = useRef(null);

  const handleScroll = () => logRef.current.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => {
    handleScroll();
  }, [logs]);

  return (
    <div className={styles.actionsLogs} onClick={handleScroll}>
      {logs.map((log, index) => <Fragment key={`log-${index}`}>{log}<br/></Fragment>)}
      <span ref={logRef} />
    </div>
  );
};

export default ActionsLogs;