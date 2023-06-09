'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 4C10 3.45 9.55 3 9 3C8.45 3 8 3.45 8 4V4.88L10 6.88V4ZM18 13.66V8.99C18 7.99 16.99 6.99 16 7V4C16 3.45 15.55 3 15 3C14.45 3 14 3.45 14 4V7H10.12L17.75 14.63C17.9 14.33 18 14 18 13.66ZM12.49 12.2L20.15 19.86C20.54 20.25 20.54 20.89 20.15 21.28C19.76 21.67 19.13 21.67 18.74 21.28L14.98 17.52L14.5 18V20C14.5 20.55 14.05 21 13.5 21H10.5C9.95 21 9.5 20.55 9.5 20V18L6.58 15.06C6.21 14.69 6 14.18 6 13.65V8.99C6 8.85 6.02 8.71 6.05 8.58L3.42 5.95C3.03 5.56 3.03 4.93 3.42 4.54C3.81 4.15 4.44 4.15 4.83 4.54L7.39 7.1L12.49 12.2Z" fill="currentColor"/></svg>';

const RuxIconPowerOff = class {
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

exports.rux_icon_power_off = RuxIconPowerOff;
