'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3ZM7.5 7.5H6.25C5.84 7.5 5.5 7.84 5.5 8.25C5.5 8.66 5.84 9 6.25 9H7.5V10.25C7.5 10.66 7.84 11 8.25 11C8.66 11 9 10.66 9 10.25V9H10.25C10.66 9 11 8.66 11 8.25C11 7.84 10.66 7.5 10.25 7.5H9V6.25C9 5.84 8.66 5.5 8.25 5.5C7.84 5.5 7.5 5.84 7.5 6.25V7.5ZM18 19H5L19 5V18C19 18.55 18.55 19 18 19ZM16.25 15.5C16.66 15.5 17 15.84 17 16.25C17 16.66 16.66 17 16.25 17H12.75C12.34 17 12 16.66 12 16.25C12 15.84 12.34 15.5 12.75 15.5H16.25Z" fill="currentColor"/></svg>';

const RuxIconIso = class {
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

exports.rux_icon_iso = RuxIconIso;
