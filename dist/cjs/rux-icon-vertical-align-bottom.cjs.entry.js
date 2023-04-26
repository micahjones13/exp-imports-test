'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 13H14.79C15.24 13 15.46 13.54 15.15 13.85L12.36 16.64C12.16 16.84 11.85 16.84 11.65 16.64L8.86 13.85C8.54 13.54 8.76 13 9.21 13H11V4C11 3.45 11.45 3 12 3C12.55 3 13 3.45 13 4V13ZM5 21C4.45 21 4 20.55 4 20C4 19.45 4.45 19 5 19H19C19.55 19 20 19.45 20 20C20 20.55 19.55 21 19 21H5Z" fill="currentColor"/></svg>';

const RuxIconVerticalAlignBottom = class {
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

exports.rux_icon_vertical_align_bottom = RuxIconVerticalAlignBottom;
