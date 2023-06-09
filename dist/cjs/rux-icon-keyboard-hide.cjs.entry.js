'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 14C2 15.1 2.9 16 4 16H20C21.1 16 22 15.1 22 14V4C22 2.9 21.1 2 20 2ZM11 5H13V7H11V5ZM13 8H11V10H13V8ZM8 5H10V7H8V5ZM10 8H8V10H10V8ZM7 10H5V8H7V10ZM5 7H7V5H5V7ZM15 14H9C8.45 14 8 13.55 8 13C8 12.45 8.45 12 9 12H15C15.55 12 16 12.45 16 13C16 13.55 15.55 14 15 14ZM14 10H16V8H14V10ZM16 7H14V5H16V7ZM17 10H19V8H17V10ZM19 7H17V5H19V7ZM15.14 18.86L12.35 21.65C12.16 21.84 11.84 21.84 11.65 21.65L8.86 18.86C8.54 18.55 8.76 18.01 9.21 18.01H14.79C15.23 18.01 15.45 18.55 15.14 18.86Z" fill="currentColor"/></svg>';

const RuxIconKeyboardHide = class {
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

exports.rux_icon_keyboard_hide = RuxIconKeyboardHide;
