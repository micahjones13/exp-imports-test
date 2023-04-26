'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.99002 12C3.99002 6.94002 8.16002 2.86002 13.25 3.00002C17.94 3.13002 21.86 7.05002 21.99 11.74C22.13 16.83 18.04 21 12.99 21C10.91 21 8.99002 20.29 7.47002 19.1C7.00002 18.73 6.97002 18.03 7.39002 17.6C7.75002 17.24 8.31002 17.21 8.71002 17.52C9.89002 18.45 11.38 19 12.99 19C16.89 19 20.04 15.81 19.99 11.9C19.94 8.18002 16.81 5.05002 13.09 5.00002C9.17002 4.95002 5.99002 8.10002 5.99002 12H7.79002C8.23002 12 8.46002 12.54 8.14002 12.85L5.35002 15.65C5.15002 15.85 4.84002 15.85 4.64002 15.65L1.85002 12.85C1.53002 12.54 1.75002 12 2.20002 12H3.99002ZM11.99 8.75002C11.99 8.34002 12.33 8.00002 12.74 8.00002C13.16 8.00002 13.49 8.34002 13.49 8.74002V12.14L16.37 13.85C16.72 14.06 16.84 14.52 16.63 14.88C16.42 15.23 15.96 15.35 15.6 15.14L12.48 13.29C12.18 13.11 11.99 12.78 11.99 12.43V8.75002Z" fill="currentColor"/></svg>';

const RuxIconRestore = class {
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

exports.rux_icon_restore = RuxIconRestore;
