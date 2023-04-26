'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 3H21C22 3 23 4 23 5V19C23 20 22 21 21 21H3C1.9 21 1 20.1 1 19V5C1 4 2 3 3 3ZM8.12 12.99L5.63 16.19C5.37 16.52 5.61 17 6.02 17.01H18.01C18.42 17.01 18.66 16.54 18.41 16.21L14.9 11.53C14.7 11.26 14.3 11.26 14.1 11.52L11 15.51L8.9 12.98C8.7 12.73 8.32 12.74 8.12 12.99Z" fill="currentColor"/></svg>';

const RuxIconPhotoSizeSelectActual = class {
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

exports.rux_icon_photo_size_select_actual = RuxIconPhotoSizeSelectActual;
