'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.58 5.58L22.41 10.41C22.79 10.79 23 11.3 23 11.83V14C23 15.1 22.1 16 21 16C21 17.66 19.66 19 18 19C16.34 19 15 17.66 15 16H9C9 17.66 7.66 19 6 19C4.34 19 3 17.66 3 16C1.9 16 1 15.1 1 14V7C1 5.89 1.9 5 3 5H16.17C16.7 5 17.21 5.21 17.58 5.58ZM3 8V10C3 10.55 3.45 11 4 11H7V7H4C3.45 7 3 7.45 3 8ZM6 17.25C5.31 17.25 4.75 16.69 4.75 16C4.75 15.31 5.31 14.75 6 14.75C6.69 14.75 7.25 15.31 7.25 16C7.25 16.69 6.69 17.25 6 17.25ZM9 11H13V7H9V11ZM18 17.25C17.31 17.25 16.75 16.69 16.75 16C16.75 15.31 17.31 14.75 18 14.75C18.69 14.75 19.25 15.31 19.25 16C19.25 16.69 18.69 17.25 18 17.25ZM15 7V11H20L16 7H15Z" fill="currentColor"/></svg>';

const RuxIconAirportShuttle = class {
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

exports.rux_icon_airport_shuttle = RuxIconAirportShuttle;
