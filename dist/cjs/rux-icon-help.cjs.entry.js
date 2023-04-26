'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19V17H13V19H11ZM14.17 12.17L15.07 11.25C16.09 10.23 16.44 8.48 15.26 6.85C14.36 5.6 12.91 4.81 11.39 5.05C9.84 5.29 8.59 6.41 8.16 7.88C8 8.44 8.4 9 8.98 9H9.28C9.67 9 9.98 8.72 10.1 8.35C10.43 7.4 11.46 6.77 12.57 7.08C13.27 7.28 13.83 7.89 13.96 8.61C14.09 9.31 13.87 9.97 13.41 10.41L12.17 11.67C11.75 12.09 11.42 12.61 11.22 13.19C11.08 13.6 11 14.04 11 14.5V15H13C13 14.54 13.05 14.18 13.13 13.86C13.31 13.14 13.67 12.68 14.17 12.17Z" fill="currentColor"/></svg>';

const RuxIconHelp = class {
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

exports.rux_icon_help = RuxIconHelp;