import React from 'react';
import { ReactComponent as OscillatorOne } from 'assets/oscillators/OSCILLATOR_1.svg';
import { ReactComponent as OscillatorTwo } from 'assets/oscillators/OSCILLATOR_2.svg';
import { ReactComponent as OscillatorThree } from 'assets/oscillators/OSCILLATOR_3.svg';
import { ReactComponent as OscillatorFour } from 'assets/oscillators/OSCILLATOR_4.svg';

const OSCILLATORS = {
  0: <OscillatorOne />,
  1: <OscillatorTwo />,
  2: <OscillatorThree />,
  3: <OscillatorFour />
};

const OSCILLATORS_NAMES = {
  0: "SINE",
  1: "TRI ANGLE",
  2: "SAW TOOTH",
  3: "RANDOM",
}

const API_FETCH_INTERVAL = 500;

export { OSCILLATORS, OSCILLATORS_NAMES, API_FETCH_INTERVAL };