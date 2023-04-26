'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 18H20V5H19.7L15 6.7V8.4L18 7.38V18ZM8 8C8 7.45 8.45 7 9 7C9.55 7 10 7.45 10 8V11H13C13.55 11 14 11.45 14 12C14 12.55 13.55 13 13 13H10V16C10 16.55 9.55 17 9 17C8.45 17 8 16.55 8 16V13H5C4.45 13 4 12.55 4 12C4 11.45 4.45 11 5 11H8V8Z" fill="currentColor"/></svg>';

const RuxIconExposurePlus1 = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em')
     */
    this.size = 'auto';
  }
  get iconSize() {
    const sizes = {
      'extra-small': '1rem',
      small: '2rem',
      normal: '3rem',
      large: '4rem',
    };
    if (sizes[this.size]) {
      return sizes[this.size];
    }
    else {
      return this.size;
    }
  }
  render() {
    const style = {
      height: this.iconSize,
      width: this.iconSize,
    };
    return index.h("div", { style: style, innerHTML: svgIcon });
  }
};

exports.rux_icon_exposure_plus_1 = RuxIconExposurePlus1;
