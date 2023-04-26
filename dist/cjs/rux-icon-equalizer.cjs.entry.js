'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C13.1 20 14 19.1 14 18V6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6V18C10 19.1 10.9 20 12 20ZM6 20C7.1 20 8 19.1 8 18V14C8 12.9 7.1 12 6 12C4.9 12 4 12.9 4 14V18C4 19.1 4.9 20 6 20ZM16 18V11C16 9.9 16.9 9 18 9C19.1 9 20 9.9 20 11V18C20 19.1 19.1 20 18 20C16.9 20 16 19.1 16 18Z" fill="currentColor"/></svg>';

const RuxIconEqualizer = class {
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

exports.rux_icon_equalizer = RuxIconEqualizer;
