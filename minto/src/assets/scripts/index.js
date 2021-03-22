import { Slider } from './Slider';

const slider = new Slider({
  sliderSelector: '.s-slider',
  tapeSelector: '.s-slider_tape',
  controlsSelector: '.s-slider_controls',
  leftControlClass: 's-slider_controls__left',
  rightControlClass: 's-slider_controls__right',
  slidesNumber: 3,
});

slider.run();
