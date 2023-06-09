'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 2V3.05C11 3.6 11.45 4 12 4C12.55 4 13 3.6 13 3.05V2C13 1.45 12.55 1 12 1C11.45 1 11 1.45 11 2ZM18 15C18.55 15 19 14.55 19 14V10.05C19 9.5 18.55 9.05 18 9.05H6.00003C5.45003 9.05 5.00003 9.5 5.00003 10.05V14C5.00003 14.55 5.45003 15 6.00003 15H18ZM17.96 4.68L18.34 4.3C18.73 3.91 19.36 3.91 19.75 4.3C20.14 4.69 20.14 5.32 19.75 5.71L19.37 6.09C18.98 6.48 18.35 6.48 17.96 6.09C17.57 5.7 17.57 5.07 17.96 4.68ZM13 22V21.04C13 20.49 12.55 20.04 12 20.04C11.45 20.04 11 20.49 11 21.04V22C11 22.55 11.45 23 12 23C12.55 23 13 22.55 13 22ZM19.35 18L19.74 18.39C20.13 18.77 20.13 19.41 19.74 19.79L19.73 19.8C19.34 20.19 18.71 20.19 18.32 19.8L17.94 19.41C17.55 19.02 17.55 18.39 17.94 18C18.33 17.61 18.96 17.61 19.35 18ZM4.25003 5.71L4.64003 6.1C5.03003 6.49 5.66003 6.49 6.05003 6.1C6.44003 5.71 6.44003 5.08 6.05003 4.69L5.66003 4.3C5.27003 3.91 4.64003 3.91 4.25003 4.3C3.87003 4.69 3.87003 5.33 4.25003 5.71ZM6.05003 19.41L5.67003 19.79C5.28003 20.18 4.64003 20.18 4.26003 19.79C3.87003 19.4 3.87003 18.77 4.26003 18.38L4.64003 18C5.03003 17.61 5.66003 17.61 6.05003 18C6.44003 18.39 6.44003 19.02 6.05003 19.41Z" fill="currentColor"/></svg>';

const RuxIconWbIridescent = class {
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

exports.rux_icon_wb_iridescent = RuxIconWbIridescent;
