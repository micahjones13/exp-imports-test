'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 1H21C22.1 1 23 1.9 23 3V17C23 18.1 22.1 19 21 19H7C5.9 19 5 18.1 5 17V3C5 1.9 5.9 1 7 1ZM1 6C1 5.45 1.45 5 2 5C2.55 5 3 5.45 3 6V20C3 20.55 3.45 21 4 21H18C18.55 21 19 21.45 19 22C19 22.55 18.55 23 18 23H3C1.9 23 1 22.1 1 21V6ZM20 17H8C7.45 17 7 16.55 7 16V4C7 3.45 7.45 3 8 3H20C20.55 3 21 3.45 21 4V16C21 16.55 20.55 17 20 17ZM16.83 7.34L13.25 14.51C13.1 14.81 12.79 15 12.45 15H12.44C11.77 15 11.34 14.3 11.64 13.71L15 7H12C11.45 7 11 6.55 11 6C11 5.45 11.45 5 12 5H15.38C16.28 5 17 5.72 17 6.62C17 6.87 16.94 7.12 16.83 7.34Z" fill="currentColor"/></svg>';

const RuxIconFilter7 = class {
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

exports.rux_icon_filter_7 = RuxIconFilter7;
