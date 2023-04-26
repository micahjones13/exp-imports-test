'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 10V6C4 5.45 4.45 5 5 5H20C20.55 5 21 5.45 21 6V10C21 10.55 20.55 11 20 11H5C4.45 11 4 10.55 4 10ZM20 18H5C4.45 18 4 17.55 4 17V13C4 12.45 4.45 12 5 12H20C20.55 12 21 12.45 21 13V17C21 17.55 20.55 18 20 18Z" fill="currentColor"/></svg>';

const RuxIconViewStream = class {
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

exports.rux_icon_view_stream = RuxIconViewStream;
