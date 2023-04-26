'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 5C14 3.9 13.1 3 12 3H11V2C11 1.45 10.55 1 10 1H6C5.45 1 5 1.45 5 2V3H4C2.9 3 2 3.9 2 5V20C2 21.1 2.9 22 4 22H12C13.1 22 14 21.1 14 20H20C21.1 20 22 19.1 22 18V7C22 5.9 21.1 5 20 5H14ZM10 18V16H12V18H10ZM10 7V9H12V7H10ZM16 18H14V16H16V18ZM14 9H16V7H14V9ZM20 18H18V16H20V18ZM18 9H20V7H18V9Z" fill="currentColor"/></svg>';

const RuxIconCameraRoll = class {
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

exports.rux_icon_camera_roll = RuxIconCameraRoll;
