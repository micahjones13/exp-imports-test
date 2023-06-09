'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.07 3.98L22.03 15.95C22.45 16.96 21.96 18.13 20.94 18.55L13.58 21.6C13.33 21.7 13.07 21.75 12.81 21.75C12.03 21.74 11.29 21.28 10.98 20.52L6.01998 8.55C5.90998 8.29 5.85998 8.02 5.86998 7.75C5.88998 6.98 6.34998 6.26 7.09998 5.95L14.47 2.9C14.73 2.79 15 2.75 15.26 2.75C16.03 2.77 16.76 3.23 17.07 3.98ZM3.86998 20.21L2.52998 19.65C1.51998 19.23 1.02998 18.06 1.43998 17.04L3.86998 11.18V20.21ZM7.87998 8.75C7.32998 8.75 6.87998 8.3 6.87998 7.75C6.87998 7.2 7.32998 6.75 7.87998 6.75C8.42998 6.75 8.87998 7.2 8.87998 7.75C8.87998 8.3 8.42998 8.75 7.87998 8.75ZM7.87998 21.75C6.77998 21.75 5.87998 20.85 5.87998 19.75V13.41L9.32998 21.75H7.87998Z" fill="currentColor"/></svg>';

const RuxIconStyle = class {
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

exports.rux_icon_style = RuxIconStyle;
