'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 5H20C21.1 5 22 5.9 22 7V17C22 18.1 21.1 19 20 19H4C2.9 19 2 18.1 2 17L2.01 7C2.01 5.9 2.9 5 4 5ZM13 8H11V10H13V8ZM11 11H13V13H11V11ZM10 8H8V10H10V8ZM8 11H10V13H8V11ZM5 13H7V11H5V13ZM7 10H5V8H7V10ZM9 17H15C15.55 17 16 16.55 16 16C16 15.45 15.55 15 15 15H9C8.45 15 8 15.45 8 16C8 16.55 8.45 17 9 17ZM16 13H14V11H16V13ZM14 10H16V8H14V10ZM19 13H17V11H19V13ZM17 10H19V8H17V10Z" fill="currentColor"/></svg>';

const RuxIconKeyboard = class {
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

exports.rux_icon_keyboard = RuxIconKeyboard;
