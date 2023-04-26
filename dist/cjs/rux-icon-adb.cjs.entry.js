'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.22 2.26994L16.12 4.36994C17.86 5.63994 19 7.67994 19 9.99994V10.9999H5V9.99994C5 7.67994 6.14 5.63994 7.88 4.36994L5.78 2.26994L6.6 1.43994L8.91 3.74994C9.84 3.27994 10.88 2.99994 12 2.99994C13.12 2.99994 14.16 3.27994 15.1 3.74994L17.4 1.43994L18.22 2.26994ZM12 22.9999C8.13 22.9999 5 19.8699 5 15.9999V11.9999H19V15.9999C19 19.8699 15.87 22.9999 12 22.9999ZM9 8.99994C8.45 8.99994 8 8.54994 8 7.99994C8 7.44994 8.45 6.99994 9 6.99994C9.55 6.99994 10 7.44994 10 7.99994C10 8.54994 9.55 8.99994 9 8.99994ZM14 7.99994C14 8.54994 14.45 8.99994 15 8.99994C15.55 8.99994 16 8.54994 16 7.99994C16 7.44994 15.55 6.99994 15 6.99994C14.45 6.99994 14 7.44994 14 7.99994Z" fill="currentColor"/></svg>';

const RuxIconAdb = class {
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

exports.rux_icon_adb = RuxIconAdb;
