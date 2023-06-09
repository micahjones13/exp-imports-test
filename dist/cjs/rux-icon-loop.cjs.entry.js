'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 2.21003V4.00003C17.42 4.00003 21 7.58003 21 12C21 13.04 20.8 14.04 20.43 14.95C20.16 15.62 19.3 15.8 18.79 15.29C18.52 15.02 18.41 14.61 18.56 14.25C18.85 13.56 19 12.79 19 12C19 8.69003 16.31 6.00003 13 6.00003V7.79003C13 8.24003 12.46 8.46003 12.14 8.15003L9.35 5.36003C9.15 5.16003 9.15 4.85003 9.35 4.65003L12.15 1.86003C12.46 1.54003 13 1.76003 13 2.21003ZM7 12C7 15.31 9.69 18 13 18V16.21C13 15.76 13.54 15.54 13.85 15.85L16.64 18.64C16.84 18.84 16.84 19.15 16.64 19.35L13.85 22.14C13.54 22.46 13 22.24 13 21.79V20C8.58 20 5 16.42 5 12C5 10.96 5.2 9.96003 5.57 9.05003C5.84 8.38003 6.7 8.20003 7.21 8.71003C7.48 8.98003 7.59 9.39003 7.44 9.75003C7.15 10.44 7 11.21 7 12Z" fill="currentColor"/></svg>';

const RuxIconLoop = class {
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

exports.rux_icon_loop = RuxIconLoop;
