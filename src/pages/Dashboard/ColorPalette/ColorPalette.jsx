import React from 'react';
import { makeStyles } from '@mui/styles';
import {Knob} from 'components';
import {PALETTE_IMG_WIDTH, PALETTE_TRACK_HEIGHT} from "./constants";
import colorPalette from "./index";

const useStyles = makeStyles({
  colorPalette: {
    border: '1px solid white',
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    '& img': {
      width: 'auto',
      maxHeight: '300px'
    }
  },
  knobsContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  palette: {
    position: 'relative'
  },
  paletteCursor: {
    height: '35px',
    background: 'rgba(255, 255, 255, 0.2)',
    position: 'absolute',
    borderLeft: '2px solid black',
    borderRight: '2px solid black',
  }
});

const ColorPalette = ({ activeTrackIndex, modulations }) => {
  const styles = useStyles();
  const activeTrackPalette = modulations[activeTrackIndex].color_palette;

  const widthPercentage = (activeTrackPalette.width+1) * (100/128);
  const offsetPercentage = (activeTrackPalette.offset) * (100/128);
  const widthPx = PALETTE_IMG_WIDTH * (widthPercentage/100);
  const offsetPx = (PALETTE_IMG_WIDTH * (offsetPercentage/100)) - (widthPx/2);

  return (
    <div className={styles.colorPalette}>
      <div className={styles.knobsContainer}>
        {modulations.map((modulation, index) => (
          <Knob
            value={modulation.color_palette.selected_palette}
            size="small"
            isToggled={activeTrackIndex === index}
          />
        ))}
      </div>
      <div className={styles.palette}>
        <img src="src/assets/palette/palette.png" alt="palette"/>
        <div
          className={styles.paletteCursor}
          style={{
            top: (PALETTE_TRACK_HEIGHT * activeTrackIndex),
            left: offsetPx,
            width: widthPx
          }}
        />
      </div>
    </div>
  )
};

export default ColorPalette;