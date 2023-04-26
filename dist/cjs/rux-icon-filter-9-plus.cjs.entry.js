'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 1H21C22.1 1 23 1.9 23 3V17C23 18.1 22.1 19 21 19H7C5.9 19 5 18.1 5 17V3C5 1.9 5.9 1 7 1ZM1 6C1 5.45 1.45 5 2 5C2.55 5 3 5.45 3 6V20C3 20.55 3.45 21 4 21H18C18.55 21 19 21.45 19 22C19 22.55 18.55 23 18 23H3C1.9 23 1 22.1 1 21V6ZM14 8V12C14 13.1 13.1 14 12 14H10C9.45 14 9 13.55 9 13C9 12.45 9.45 12 10 12H12V11H11C9.9 11 9 10.1 9 9V8C9 6.9 9.9 6 11 6H12C13.1 6 14 6.9 14 8ZM11 9V8H12V9H11ZM20 17H8C7.45 17 7 16.55 7 16V4C7 3.45 7.45 3 8 3H20C20.55 3 21 3.45 21 4V10C21 9.45 20.55 9 20 9H19V8C19 7.45 18.55 7 18 7C17.45 7 17 7.45 17 8V9H16C15.45 9 15 9.45 15 10C15 10.55 15.45 11 16 11H17V12C17 12.55 17.45 13 18 13C18.55 13 19 12.55 19 12V11H20C20.55 11 21 10.55 21 10V16C21 16.55 20.55 17 20 17Z" fill="currentColor"/></svg>';

const RuxIconFilter9Plus = class {
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

exports.rux_icon_filter_9_plus = RuxIconFilter9Plus;
