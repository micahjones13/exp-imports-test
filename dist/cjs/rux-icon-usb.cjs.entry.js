'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6.99989H16C15.45 6.99989 15 7.44989 15 7.99989V9.99989C15 10.5499 15.45 10.9999 16 10.9999V12.9999H13V4.99989H14C14.41 4.99989 14.65 4.52989 14.4 4.19989L12.4 1.52989C12.2 1.25989 11.8 1.25989 11.6 1.52989L9.59999 4.19989C9.34999 4.52989 9.58999 4.99989 9.99999 4.99989H11V12.9999H7.99999V10.9299C8.82999 10.4899 9.37999 9.56989 9.13999 8.49989C8.96999 7.72989 8.36999 7.09989 7.61999 6.88989C6.14999 6.47989 4.79999 7.58989 4.79999 8.99989C4.79999 9.84989 5.29999 10.5599 5.99999 10.9299V12.9999C5.99999 14.0999 6.89999 14.9999 7.99999 14.9999H11V18.0499C10.14 18.4999 9.60999 19.4699 9.86999 20.5399C10.05 21.2899 10.66 21.9199 11.41 22.1199C12.87 22.5099 14.21 21.4199 14.21 19.9999C14.21 19.1499 13.72 18.4199 13.01 18.0499V14.9999H16.01C17.11 14.9999 18.01 14.0999 18.01 12.9999V10.9999C18.56 10.9999 19.01 10.5499 19.01 9.99989V7.99989C19 7.44989 18.55 6.99989 18 6.99989Z" fill="currentColor"/></svg>';

const RuxIconUsb = class {
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

exports.rux_icon_usb = RuxIconUsb;
