'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 4V12C4 13.66 5.34 15 7 15H12C12.55 15 13 15.45 13 16C13 16.55 12.55 17 12 17H7C4.24 17 2 14.76 2 12V4C2 3.45 2.45 3 3 3C3.55 3 4 3.45 4 4ZM20.8 16.61C21.54 16.27 22.45 16.52 22.83 17.24C23.23 18 22.9 18.94 22.14 19.3L20.19 20.19C19.2 20.64 18.04 20.23 17.56 19.25L15 14H8C6.34 14 5 12.66 5 11V3H11V9H14.51C15.27 9 15.96 9.45 16.3 10.13L19.71 17.11L20.8 16.61Z" fill="currentColor"/></svg>';

const RuxIconAirlineSeatLegroomExtra = class {
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

exports.rux_icon_airline_seat_legroom_extra = RuxIconAirlineSeatLegroomExtra;
