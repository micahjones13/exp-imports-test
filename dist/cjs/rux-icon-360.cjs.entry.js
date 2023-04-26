'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 7C6.48 7 2 9.24 2 12C2 14.24 4.94 16.13 9 16.77V18.79C9 19.24 9.54 19.46 9.85 19.14L12.64 16.35C12.84 16.15 12.84 15.84 12.64 15.64L9.85 12.85C9.54 12.54 9 12.76 9 13.21V14.73C5.85 14.17 4 12.83 4 12C4 10.94 7.04 9 12 9C16.96 9 20 10.94 20 12C20 12.66 18.8 13.68 16.68 14.34C16.27 14.47 16 14.85 16 15.28C16 15.95 16.65 16.44 17.28 16.24C20.11 15.36 22 13.79 22 12C22 9.24 17.52 7 12 7Z" fill="currentColor"/></svg>';

const RuxIcon360 = class {
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

exports.rux_icon_360 = RuxIcon360;
