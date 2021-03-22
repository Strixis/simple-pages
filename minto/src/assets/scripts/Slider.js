class Slider {
  constructor(settigs) {
    this.sliderSelector = settigs.sliderSelector;
    this.controlsSelector = settigs.controlsSelector;
    this.tapeSelector = settigs.tapeSelector;
    this.leftControlClass = settigs.leftControlClass;
    this.rightControlClass = settigs.rightControlClass;
    this.slidesNumber = settigs.slidesNumber;

    this.sliderElem = null;
    this.tapeElem = null;
    this.controlsElem = null;
    this.leftControlElem = null;
    this.rightControlElem = null;
    this.currentSlide = 0
  }

  run() {
    this._init();
    this.controlsElem.addEventListener('click', this._switchSlide);
  }

  _init() {
    this.sliderElem = document.querySelector(this.sliderSelector);
    this.tapeElem = this.sliderElem.querySelector(this.tapeSelector);
    this.controlsElem = this.sliderElem.querySelector(this.controlsSelector);
    this.leftControlElem = this.controlsElem.querySelector(`.${this.leftControlClass}`);
    this.rightControlElem = this.controlsElem.querySelector(`.${this.rightControlClass}`);
    this._switchSlide = this._switchSlide.bind(this);
  }

  _switchSlide(event) {
    if (event.target.classList.contains(this.leftControlClass)) {
      this.currentSlide = this.currentSlide - 1 < 0 ? this.slidesNumber - 1 : this.currentSlide - 1;
      this.tapeElem.style.marginLeft = `${this.currentSlide * -100}%`;
    } else if (event.target.classList.contains(this.rightControlClass)) {
      this.currentSlide = this.currentSlide + 1 === this.slidesNumber ? 0 : this.currentSlide + 1;
      this.tapeElem.style.marginLeft = `${this.currentSlide * -100}%`;
    }
  }
};

export { Slider };
