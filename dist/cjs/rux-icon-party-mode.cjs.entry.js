'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 4H16.83L15.59 2.65C15.22 2.24 14.68 2 14.12 2H9.88C9.32 2 8.78 2.24 8.4 2.65L7.17 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM12 7C13.63 7 15.06 7.79 15.98 9H12C10.34 9 9 10.34 9 12C9 12.35 9.07 12.69 9.18 13H7.1C7.04 12.68 7 12.34 7 12C7 9.24 9.24 7 12 7ZM8.02 15C8.94 16.21 10.37 17 12 17C14.76 17 17 14.76 17 12C17 11.66 16.97 11.32 16.9 11H14.82C14.93 11.31 15 11.65 15 12C15 13.66 13.66 15 12 15H8.02Z" fill="currentColor"/></svg>';

const RuxIconPartyMode = class {
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

exports.rux_icon_party_mode = RuxIconPartyMode;
