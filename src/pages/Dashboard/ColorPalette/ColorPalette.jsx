import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  colorPalette: {
    border: '1px solid white',
    width: '100%',
    height: '300px'
  }
});

const ColorPalette = () => {
  const styles = useStyles();

  return (
    <div className={styles.colorPalette}>
      Color palette
    </div>
  )
};

export default ColorPalette;