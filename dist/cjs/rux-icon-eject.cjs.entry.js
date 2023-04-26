'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.37 13.45L11.17 6.25C11.56 5.65 12.44 5.65 12.83 6.25L17.63 13.45C18.08 14.11 17.6 15 16.8 15H7.2C6.4 15 5.92 14.11 6.37 13.45ZM18 17H6C5.45 17 5 17.45 5 18C5 18.55 5.45 19 6 19H18C18.55 19 19 18.55 19 18C19 17.45 18.55 17 18 17Z" fill="currentColor"/></svg>';

const RuxIconEject = class {
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

exports.rux_icon_eject = RuxIconEject;
