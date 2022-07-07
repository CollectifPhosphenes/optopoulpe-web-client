import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dashboard from "pages/Dashboard";
import { makeStyles } from '@mui/styles';
import './App.css';
import {colorModeSwitch} from "./pages/Dashboard/actions";
import {changeUrl} from "./actions";

const useStyles = makeStyles({
  modeBar: {
    position: 'absolute',
    top: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center'
  },
  darkMode: {
    background: '#30363d',
    color: 'white'
  },
  lightMode: {
  },
  switch: {
    display: 'inline-block',
    position: 'relative',
    width: '70px',
    height: '40px',
    cursor: 'pointer',
    overflow: 'hidden'
  }
});

const App = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const theme = useSelector(state => state.app.theme);

  const [url, setUrl] = useState('');

  const handleThemeChange = () => dispatch(colorModeSwitch(theme === 'dark' ? 'light' : 'dark'));
  return (
    <div className={`${theme === 'dark' ? styles.darkMode : styles.lightMode} App`}>
      <div className={styles.modeBar}>
        <div>
          <input onChange={e => setUrl(e.target.value)} type="text" value={url}/>
          <button onClick={() => dispatch(changeUrl(url))}>▶️</button>
          <button onClick={() => dispatch(changeUrl(''))}>panic ⏹️</button>
        </div>
        <button onClick={() => handleThemeChange()}>
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
      <Dashboard />
    </div>
  )
}

export default App
