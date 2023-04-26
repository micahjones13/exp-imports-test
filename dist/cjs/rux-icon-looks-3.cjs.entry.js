'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.01001 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5.01001C3.91001 21 3.01001 20.1 3.01001 19V5C3.01001 3.9 3.91001 3 5.01001 3ZM13.51 12C14.34 12 15.01 11.33 15.01 10.5V9C15.01 7.9 14.11 7 13.01 7H10C9.45001 7 9.01001 7.45 9.01001 8C9.01001 8.55 9.45001 9 10 9H13.01L13 11H12C11.45 11 11 11.45 11 12C11 12.55 11.45 13 12 13H13L13.01 15H10C9.45001 15 9.00001 15.45 9.00001 16C9.00001 16.55 9.45001 17 10 17H13.01C14.11 17 15.01 16.11 15.01 15V13.5C15.01 12.67 14.34 12 13.51 12Z" fill="currentColor"/></svg>';

const RuxIconLooks3 = class {
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

exports.rux_icon_looks_3 = RuxIconLooks3;
