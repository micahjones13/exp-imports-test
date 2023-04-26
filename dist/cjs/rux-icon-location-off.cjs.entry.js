'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.24998 3.86C8.49998 2.71 10.16 2 12 2C15.87 2 19 5.13 19 9C19 10.57 18.37 12.36 17.49 14.11L13.94 10.56C14.29 10.13 14.5 9.59 14.5 9C14.5 7.62 13.38 6.5 12 6.5C11.41 6.5 10.87 6.71 10.44 7.05L7.24998 3.86ZM2.70998 4.97C2.31998 4.58 2.31998 3.95 2.70998 3.56C3.09998 3.17 3.72998 3.17 4.11998 3.56L19.43 18.89C19.82 19.28 19.82 19.91 19.43 20.3C19.04 20.69 18.41 20.69 18.02 20.3L15.37 17.65C14.38 19.1 13.41 20.33 12.76 21.11C12.36 21.59 11.63 21.59 11.23 21.11C9.41998 18.92 4.99998 13.17 4.99998 9C4.99998 8.47 5.06998 7.95 5.17998 7.44L2.70998 4.97Z" fill="currentColor"/></svg>';

const RuxIconLocationOff = class {
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

exports.rux_icon_location_off = RuxIconLocationOff;
