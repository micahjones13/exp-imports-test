'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 2H20C21.1 2 22 2.9 22 4V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V4C2 2.9 2.9 2 4 2ZM5 20H8V16H4V19C4 19.55 4.45 20 5 20ZM8 14H4V10H8V14ZM4 8H8V4H5C4.45 4 4 4.45 4 5V8ZM14 20H10V16H14V20ZM10 14H14V10H10V14ZM14 8H10V4H14V8ZM16 20H19C19.55 20 20 19.55 20 19V16H16V20ZM20 14H16V10H20V14ZM16 8H20V5C20 4.45 19.55 4 19 4H16V8Z" fill="currentColor"/></svg>';

const RuxIconGridOn = class {
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

exports.rux_icon_grid_on = RuxIconGridOn;
