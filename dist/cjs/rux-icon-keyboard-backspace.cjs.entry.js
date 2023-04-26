'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 11H6.82998L9.70998 8.11998C10.1 7.72998 10.1 7.09998 9.70998 6.70998C9.31998 6.31998 8.68998 6.31998 8.29998 6.70998L3.70998 11.3C3.31998 11.69 3.31998 12.32 3.70998 12.71L8.29998 17.3C8.68998 17.69 9.31998 17.69 9.70998 17.3C10.1 16.91 10.1 16.28 9.70998 15.89L6.82998 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11Z" fill="currentColor"/></svg>';

const RuxIconKeyboardBackspace = class {
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

exports.rux_icon_keyboard_backspace = RuxIconKeyboardBackspace;
