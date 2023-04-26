'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 18H6C6.55 18 7 17.55 7 17V6C7 5.45 6.55 5 6 5H5C4.45 5 4 5.45 4 6V17C4 17.55 4.45 18 5 18ZM18 6V17C18 17.55 18.45 18 19 18H20C20.55 18 21 17.55 21 17V6C21 5.45 20.55 5 20 5H19C18.45 5 18 5.45 18 6ZM16 18H9C8.45 18 8 17.55 8 17V6C8 5.45 8.45 5 9 5H16C16.55 5 17 5.45 17 6V17C17 17.55 16.55 18 16 18Z" fill="currentColor"/></svg>';

const RuxIconViewArray = class {
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

exports.rux_icon_view_array = RuxIconViewArray;
