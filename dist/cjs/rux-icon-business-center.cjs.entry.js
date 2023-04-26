'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 7H16C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7H4C2.9 7 2 7.9 2 9V12C2 13.11 2.89 14 4 14H10V13C10 12.45 10.45 12 11 12H13C13.55 12 14 12.45 14 13V14H20C21.1 14 22 13.1 22 12V9C22 7.9 21.1 7 20 7ZM11 16C10.45 16 10 15.55 10 15H3.01V19C3.01 20.1 3.91 21 5.01 21H19C20.1 21 21 20.1 21 19V15H14C14 15.55 13.55 16 13 16H11ZM12 5C10.9 5 10 5.9 10 7H14C14 5.9 13.1 5 12 5Z" fill="currentColor"/></svg>';

const RuxIconBusinessCenter = class {
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

exports.rux_icon_business_center = RuxIconBusinessCenter;
