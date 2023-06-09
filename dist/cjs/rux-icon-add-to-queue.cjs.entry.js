'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 3H3C1.9 3 1 3.9 1 5V17C1 18.1 1.9 19 3 19H8V20C8 20.55 8.45 21 9 21H15C15.55 21 16 20.55 16 20V19H21C22.1 19 23 18.1 23 17V5C23 3.89 22.1 3 21 3ZM21 16C21 16.55 20.55 17 20 17H4C3.45 17 3 16.55 3 16V6C3 5.45 3.45 5 4 5H20C20.55 5 21 5.45 21 6V16ZM15 12C15.55 12 16 11.55 16 11C16 10.45 15.55 10 15 10H13V8C13 7.45 12.55 7 12 7C11.45 7 11 7.45 11 8V10H9C8.45 10 8 10.45 8 11C8 11.55 8.45 12 9 12H11V14C11 14.55 11.45 15 12 15C12.55 15 13 14.55 13 14V12H15Z" fill="currentColor"/></svg>';

const RuxIconAddToQueue = class {
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

exports.rux_icon_add_to_queue = RuxIconAddToQueue;
