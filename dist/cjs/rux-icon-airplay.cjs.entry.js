'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 3H21C22.1 3 23 3.9 23 5V17C23 18.1 22.1 19 21 19H18C17.45 19 17 18.55 17 18C17 17.45 17.45 17 18 17H20C20.55 17 21 16.55 21 16V6C21 5.45 20.55 5 20 5H4C3.45 5 3 5.45 3 6V16C3 16.55 3.45 17 4 17H6C6.55 17 7 17.45 7 18C7 18.55 6.55 19 6 19H3C1.9 19 1 18.1 1 17V5C1 3.9 1.9 3 3 3ZM15.58 22H8.41C7.52 22 7.08 20.92 7.7 20.29L11.29 16.7C11.68 16.31 12.31 16.31 12.7 16.7L16.29 20.29C16.92 20.92 16.47 22 15.58 22Z" fill="currentColor"/></svg>';

const RuxIconAirplay = class {
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

exports.rux_icon_airplay = RuxIconAirplay;
