'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 6L15.09 12.26L20.34 17.51C21.39 15.93 22 14.04 22 12C22 6.48 17.52 2 12 2C9.95999 2 8.06999 2.61 6.48999 3.66L11.74 8.91L18 6ZM2.80999 5.64L3.65999 6.49C2.28999 8.56 1.65999 11.17 2.17999 13.94C2.92999 17.89 6.09999 21.07 10.06 21.82C12.83 22.34 15.44 21.72 17.51 20.34L18.36 21.19C18.75 21.58 19.38 21.58 19.77 21.19C20.16 20.8 20.16 20.17 19.77 19.78L4.21999 4.22C3.82999 3.83 3.19999 3.83 2.80999 4.22C2.41999 4.61 2.41999 5.25 2.80999 5.64ZM12.26 15.09L8.90999 11.74L5.99999 18L12.26 15.09Z" fill="currentColor"/></svg>';

const RuxIconExploreOff = class {
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

exports.rux_icon_explore_off = RuxIconExploreOff;
