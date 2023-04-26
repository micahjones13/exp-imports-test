'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 1L17 1.01C18.1 1.01 19 1.9 19 3V20C19 21.1 18.1 22 17 22H14.92C14.81 20.59 14.49 19.25 13.97 18H17V5H7V11.01C6.36 10.74 5.69 10.53 5 10.37V3C5 1.9 5.9 1 7 1ZM3.11 12.06C2.52 12 2 12.46 2 13.05C2 13.55 2.37 13.99 2.87 14.04C7.14 14.45 10.54 17.85 10.95 22.12C11 22.62 11.43 23 11.94 23C12.53 23 13 22.49 12.94 21.9C12.43 16.7 8.31 12.58 3.11 12.06ZM2 17.09C2 16.48 2.54 15.99 3.14 16.09C6.1 16.57 8.43 18.91 8.91 21.86C9 22.46 8.52 23 7.91 23C7.42 23 7.01 22.64 6.93 22.15C6.57 20.07 4.93 18.43 2.85 18.07C2.36 17.99 2 17.58 2 17.09ZM2 23V20C3.66 20 5 21.34 5 23H2Z" fill="currentColor"/></svg>';

const RuxIconTapAndPlay = class {
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

exports.rux_icon_tap_and_play = RuxIconTapAndPlay;
