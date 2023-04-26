'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 16.12C16.37 15.72 19.01 12.93 19.16 9.48002C19.33 5.61002 16.14 2.23002 12.27 2.17002C8.35 2.12002 5.17 5.27002 5.17 9.17002C5.17 12.64 7.69 15.51 11 16.06V20H6C5.45 20 5 20.45 5 21C5 21.55 5.45 22 6 22H18C18.55 22 19 21.55 19 21C19 20.45 18.55 20 18 20H13V16.12Z" fill="currentColor"/></svg>';

const RuxIconNature = class {
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

exports.rux_icon_nature = RuxIconNature;
