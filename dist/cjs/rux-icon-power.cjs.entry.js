'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.01 7L16 4C16 3.45 15.55 3 15 3C14.45 3 14 3.45 14 4V7H10V4C10 3.45 9.55 3 9 3C8.45 3 8 3.45 8 4V7H7.99C6.9 7 6 7.9 6 8.99V13.65C6 14.18 6.21 14.69 6.58 15.06L9.5 18V20C9.5 20.55 9.95 21 10.5 21H13.5C14.05 21 14.5 20.55 14.5 20V18L17.42 15.08C17.79 14.7 18 14.19 18 13.66V8.99C18 7.89 17.11 7 16.01 7Z" fill="currentColor"/></svg>';

const RuxIconPower = class {
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

exports.rux_icon_power = RuxIconPower;
