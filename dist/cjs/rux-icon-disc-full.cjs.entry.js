'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 4C5.58 4 2 7.58 2 12C2 16.42 5.58 20 10 20C14.42 20 18 16.42 18 12C18 7.58 14.42 4 10 4ZM20 11V8C20 7.45 20.45 7 21 7C21.55 7 22 7.45 22 8V11C22 11.55 21.55 12 21 12C20.45 12 20 11.55 20 11ZM22 14V16H20V14H22ZM8 12C8 13.1 8.9 14 10 14C11.1 14 12 13.1 12 12C12 10.9 11.1 10 10 10C8.9 10 8 10.9 8 12Z" fill="currentColor"/></svg>';

const RuxIconDiscFull = class {
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

exports.rux_icon_disc_full = RuxIconDiscFull;
