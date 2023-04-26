'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM12 12.76C12 13.17 11.66 13.51 11.25 13.51H11V14.25C11 14.66 10.66 15 10.25 15C9.84 15 9.5 14.66 9.5 14.25V13.5H7.5C6.95 13.5 6.5 13.05 6.5 12.5V9.75C6.5 9.34 6.84 9 7.25 9C7.66 9 8 9.34 8 9.75V12H9.5V9.75C9.5 9.34 9.84 9 10.25 9C10.66 9 11 9.34 11 9.75V12H11.25C11.66 12 12 12.34 12 12.75V12.76ZM17.27 14.88C17.6 14.67 17.69 14.23 17.47 13.9L16.2 12L17.47 10.09C17.68 9.77 17.6 9.33 17.27 9.11C16.95 8.9 16.51 8.98 16.29 9.31L14.5 11.99V9.75C14.5 9.34 14.16 9 13.75 9C13.34 9 13 9.34 13 9.75V14.25C13 14.66 13.34 15 13.75 14.99C14.16 14.99 14.5 14.65 14.5 14.24V12L16.29 14.68C16.43 14.89 16.65 15 16.88 15C17.01 15 17.15 14.96 17.27 14.88Z" fill="currentColor"/></svg>';

const RuxIcon4k = class {
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

exports.rux_icon_4k = RuxIcon4k;
