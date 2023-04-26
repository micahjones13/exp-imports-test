'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 7.1 2.9 8 4 8H20C21.1 8 22 7.1 22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6ZM20 20H4C2.9 20 2 19.1 2 18C2 16.9 2.9 16 4 16H20C21.1 16 22 16.9 22 18C22 19.1 21.1 20 20 20ZM6 17H4V19H6V17ZM4 7H6V5H4V7ZM4 14H20C21.1 14 22 13.1 22 12C22 10.9 21.1 10 20 10H4C2.9 10 2 10.9 2 12C2 13.1 2.9 14 4 14ZM6 11H4V13H6V11Z" fill="currentColor"/></svg>';

const RuxIconStorage = class {
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

exports.rux_icon_storage = RuxIconStorage;
