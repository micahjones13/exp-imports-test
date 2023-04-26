'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 3H5V5H3V3ZM5 7H3V9H5V7ZM5 21V19H3V21H5ZM3 17V15H5V17H3ZM7 21H9V19H7V21ZM9 3H7V5H9V3ZM15 3H17V5H15V3ZM13 7H11V9H13V7ZM11 3H13V5H11V3ZM21 17V15H19V17H21ZM13 21H11V19H13V21ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM19 5V3H21V5H19ZM19 9H21V7H19V9ZM13 17H11V15H13V17ZM15 21H17V19H15V21ZM21 19V21H19V19H21Z" fill="currentColor"/></svg>';

const RuxIconBorderHorizontal = class {
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

exports.rux_icon_border_horizontal = RuxIconBorderHorizontal;
