'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 5H7V9H3V7C3 5.9 3.9 5 5 5ZM7 10V14H3V10H7ZM8 14H12V10H8V14ZM17 14H13V10H17V14ZM8 9H12V5H8V9ZM13 9V5H17V9H13ZM18 10V14H22V10H18ZM7 19H5C3.9 19 3 18.1 3 17V15H7V19ZM8 19H12V15H8V19ZM17 19H13V15H17V19ZM18 19H20C21.1 19 22 18.1 22 17V15H18V19ZM18 9V5H20C21.1 5 22 5.9 22 7V9H18Z" fill="currentColor"/></svg>';

const RuxIconViewComfy = class {
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

exports.rux_icon_view_comfy = RuxIconViewComfy;
