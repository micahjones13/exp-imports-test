'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.99 11.29C21.16 6.19 17.07 2 12 2C11.45 2 11 2.45 11 3V5C11 5.55 11.45 6 12 6C12.55 6 13 5.55 13 5V4.08C16.31 4.56 18.87 7.33 19 10.74C19.14 14.59 15.97 17.94 12.12 18C8.19 18.06 5 14.91 5 11C5 9.32 5.59 7.78 6.58 6.58L11.29 11.3C11.68 11.69 12.31 11.69 12.7 11.3C13.09 10.91 13.09 10.28 12.7 9.89L7.26 4.46C6.88 4.08 6.26 4.07 5.86 4.44C4.1 6.07 3 8.4 3 11C3 16.04 7.14 20.12 12.21 20C16.91 19.89 20.84 15.99 20.99 11.29ZM6 11C6 11.5523 6.44772 12 7 12C7.55228 12 8 11.5523 8 11C8 10.4477 7.55228 10 7 10C6.44772 10 6 10.4477 6 11ZM11 16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16ZM17 12C16.4477 12 16 11.5523 16 11C16 10.4477 16.4477 10 17 10C17.5523 10 18 10.4477 18 11C18 11.5523 17.5523 12 17 12Z" fill="currentColor"/></svg>';

const RuxIconAvTimer = class {
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

exports.rux_icon_av_timer = RuxIconAvTimer;
