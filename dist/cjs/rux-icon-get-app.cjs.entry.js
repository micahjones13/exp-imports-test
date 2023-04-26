'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 9H16.59C17.48 9 17.92 10.08 17.29 10.71L12.7 15.3C12.31 15.69 11.68 15.69 11.29 15.3L6.7 10.71C6.07 10.08 6.52 9 7.41 9H9V4C9 3.45 9.45 3 10 3H14C14.55 3 15 3.45 15 4V9ZM6 20C5.45 20 5 19.55 5 19C5 18.45 5.45 18 6 18H18C18.55 18 19 18.45 19 19C19 19.55 18.55 20 18 20H6Z" fill="currentColor"/></svg>';

const RuxIconGetApp = class {
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

exports.rux_icon_get_app = RuxIconGetApp;
