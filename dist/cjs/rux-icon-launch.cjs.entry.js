'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 18C5 18.55 5.45 19 6 19H18C18.55 19 19 18.55 19 18V13C19 12.45 19.45 12 20 12C20.55 12 21 12.45 21 13V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.89 3 5 3H11C11.55 3 12 3.45 12 4C12 4.55 11.55 5 11 5H6C5.45 5 5 5.45 5 6V18ZM15 5C14.45 5 14 4.55 14 4C14 3.45 14.45 3 15 3H21V9C21 9.55 20.55 10 20 10C19.45 10 19 9.55 19 9V6.41L9.87 15.54C9.48 15.93 8.85 15.93 8.46 15.54C8.07 15.15 8.07 14.52 8.46 14.13L17.59 5H15Z" fill="currentColor"/></svg>';

const RuxIconLaunch = class {
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

exports.rux_icon_launch = RuxIconLaunch;
