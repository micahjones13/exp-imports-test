'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.71002 6.19999C9.42002 7.68999 8.79002 9.47999 7.30002 10.2C5.80002 10.92 4.01002 10.29 3.30002 8.79999C2.58002 7.29999 3.21002 5.50999 4.70002 4.79999C6.20002 4.07999 7.99002 4.70999 8.71002 6.19999ZM22.25 14.29L21.56 16.18L9.20002 11.71L10.59 7.91999C10.97 6.88999 12.11 6.35999 13.15 6.72999L19.84 9.13999C21.94 9.89999 23.02 12.2 22.25 14.29ZM2.45002 12.48L8.00002 14.48V18C8.00002 18.55 8.45002 19 9.00002 19H15C15.55 19 16 18.55 16 18V17.37L19.58 18.66C20.1 18.85 20.68 18.58 20.87 18.06C21.06 17.54 20.79 16.96 20.27 16.77L3.13002 10.59C2.61002 10.4 2.03002 10.67 1.84002 11.19C1.66002 11.71 1.93002 12.29 2.45002 12.48Z" fill="currentColor"/></svg>';

const RuxIconAirlineSeatFlatAngled = class {
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

exports.rux_icon_airline_seat_flat_angled = RuxIconAirlineSeatFlatAngled;
