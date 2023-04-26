'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 18H5C4.45 18 4 17.55 4 17V6C4 5.45 4.45 5 5 5H8C8.55 5 9 5.45 9 6V17C9 17.55 8.55 18 8 18ZM14 18H11C10.45 18 10 17.55 10 17V13C10 12.45 10.45 12 11 12H14C14.55 12 15 12.45 15 13V17C15 17.55 14.55 18 14 18ZM17 18H20C20.55 18 21 17.55 21 17V13C21 12.45 20.55 12 20 12H17C16.45 12 16 12.45 16 13V17C16 17.55 16.45 18 17 18ZM10 10V6C10 5.45 10.45 5 11 5H20C20.55 5 21 5.45 21 6V10C21 10.55 20.55 11 20 11H11C10.45 11 10 10.55 10 10Z" fill="currentColor"/></svg>';

const RuxIconViewQuilt = class {
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

exports.rux_icon_view_quilt = RuxIconViewQuilt;
