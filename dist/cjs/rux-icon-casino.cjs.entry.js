'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3ZM6 16.5C6 17.33 6.67 18 7.5 18C8.33 18 9 17.33 9 16.5C9 15.67 8.33 15 7.5 15C6.67 15 6 15.67 6 16.5ZM7.5 9C6.67 9 6 8.33 6 7.5C6 6.67 6.67 6 7.5 6C8.33 6 9 6.67 9 7.5C9 8.33 8.33 9 7.5 9ZM10.5 12C10.5 12.83 11.17 13.5 12 13.5C12.83 13.5 13.5 12.83 13.5 12C13.5 11.17 12.83 10.5 12 10.5C11.17 10.5 10.5 11.17 10.5 12ZM16.5 18C15.67 18 15 17.33 15 16.5C15 15.67 15.67 15 16.5 15C17.33 15 18 15.67 18 16.5C18 17.33 17.33 18 16.5 18ZM15 7.5C15 8.33 15.67 9 16.5 9C17.33 9 18 8.33 18 7.5C18 6.67 17.33 6 16.5 6C15.67 6 15 6.67 15 7.5Z" fill="currentColor"/></svg>';

const RuxIconCasino = class {
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

exports.rux_icon_casino = RuxIconCasino;
