import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dashboard from "pages/Dashboard";
import { makeStyles } from '@mui/styles';
import './App.css';
import {colorModeSwitch} from "./pages/Dashboard/actions";

const useStyles = makeStyles({
  modeBar: {
    position: 'absolute',
    top: 0,
    right: 0,
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

  const handleThemeChange = () => dispatch(colorModeSwitch(theme === 'dark' ? 'light' : 'dark'));
  return (
    <div className={`${theme === 'dark' ? styles.darkMode : styles.lightMode} App`}>
      <div className={styles.modeBar}>
        <button onClick={() => handleThemeChange()}>
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
      <Dashboard />
    </div>
  )
}

export default App
