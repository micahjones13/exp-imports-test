'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 3C10.04 3 6 7.04 6 12C6 16.96 10.04 21 15 21C19.96 21 24 16.96 24 12C24 7.04 19.96 3 15 3ZM5.48 5.96C3.4 7.17 2 9.42 2 12C2 14.58 3.4 16.83 5.48 18.04C5.8 18.23 6.01 18.55 6.01 18.92C6.01 19.69 5.17 20.17 4.5 19.78C1.82 18.22 0 15.32 0 12C0 8.68 1.82 5.78 4.5 4.22C5.17 3.83 6.01 4.31 6.01 5.08C6.01 5.45 5.8 5.77 5.48 5.96ZM14 9C14 8.45 14.45 8 15 8C15.55 8 16 8.45 16 9V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13H16V15C16 15.55 15.55 16 15 16C14.45 16 14 15.55 14 15V13H12C11.45 13 11 12.55 11 12C11 11.45 11.45 11 12 11H14V9ZM8 12C8 15.86 11.14 19 15 19C18.86 19 22 15.86 22 12C22 8.14 18.86 5 15 5C11.14 5 8 8.14 8 12Z" fill="currentColor"/></svg>';

const RuxIconControlPointDuplicate = class {
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

exports.rux_icon_control_point_duplicate = RuxIconControlPointDuplicate;
