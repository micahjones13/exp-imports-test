'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 5H18C19.1 5 20 5.9 20 7V9.15C18.84 9.57 18 10.67 18 11.97V14H6V11.97C6 10.66 5.16 9.56 4 9.15V7C4 5.9 4.9 5 6 5ZM19 12C19 10.9 19.9 10 21 10C22.1 10 23 10.9 23 12V17C23 18.1 22.1 19 21 19H3C1.9 19 1 18.1 1 17V12C1 10.9 1.9 10 3 10C4.1 10 5 10.9 5 12V15H19V12Z" fill="currentColor"/></svg>';

const RuxIconWeekend = class {
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

exports.rux_icon_weekend = RuxIconWeekend;
