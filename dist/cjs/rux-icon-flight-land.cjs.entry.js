'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.34 15.85L3.51 11.61C3.07 11.49 2.77 11.1 2.77 10.64V6.88999C2.77 6.55999 3.08 6.31999 3.4 6.40999L3.73 6.49999C4.04 6.57999 4.28 6.79999 4.4 7.08999L5.15 8.94999L10.13 10.27V3.38999C10.13 2.67999 10.8 2.16999 11.48 2.34999C11.84 2.44999 12.12 2.71999 12.23 3.07999L14.81 11.53L20.12 12.95C20.92 13.17 21.39 13.99 21.18 14.79C20.96 15.59 20.14 16.06 19.34 15.85ZM3.5 19H20.5C21.05 19 21.5 19.45 21.5 20C21.5 20.55 21.05 21 20.5 21H3.5C2.95 21 2.5 20.55 2.5 20C2.5 19.45 2.95 19 3.5 19Z" fill="currentColor"/></svg>';

const RuxIconFlightLand = class {
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

exports.rux_icon_flight_land = RuxIconFlightLand;
