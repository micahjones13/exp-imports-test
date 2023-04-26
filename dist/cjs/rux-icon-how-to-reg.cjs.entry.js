'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 12C8.79 12 7 10.21 7 8C7 5.79 8.79 4 11 4C13.21 4 15 5.79 15 8C15 10.21 13.21 12 11 12ZM12 20H3V18C3 15.34 8.33 14 11 14C11.32 14 11.61 14.02 12 14.06L11.16 14.88C9.97 16.04 9.96 17.96 11.14 19.14L12 20ZM14.76 19.78C15.15 20.17 15.79 20.17 16.18 19.78L21.32 14.6C21.7 14.22 21.7 13.6 21.32 13.21L21.31 13.2C20.92 12.81 20.29 12.81 19.9 13.2L15.47 17.66L14.1 16.29C13.72 15.9 13.09 15.9 12.7 16.29L12.69 16.3C12.31 16.68 12.31 17.3 12.69 17.69L14.76 19.78Z" fill="currentColor"/></svg>';

const RuxIconHowToReg = class {
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

exports.rux_icon_how_to_reg = RuxIconHowToReg;
