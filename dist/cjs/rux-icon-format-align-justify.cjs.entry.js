'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C3.45 5 3 4.55 3 4C3 3.45 3.45 3 4 3H20C20.55 3 21 3.45 21 4C21 4.55 20.55 5 20 5H4ZM4 9H20C20.55 9 21 8.55 21 8C21 7.45 20.55 7 20 7H4C3.45 7 3 7.45 3 8C3 8.55 3.45 9 4 9ZM20 13H4C3.45 13 3 12.55 3 12C3 11.45 3.45 11 4 11H20C20.55 11 21 11.45 21 12C21 12.55 20.55 13 20 13ZM4 17H20C20.55 17 21 16.55 21 16C21 15.45 20.55 15 20 15H4C3.45 15 3 15.45 3 16C3 16.55 3.45 17 4 17ZM4 21H20C20.55 21 21 20.55 21 20C21 19.45 20.55 19 20 19H4C3.45 19 3 19.45 3 20C3 20.55 3.45 21 4 21Z" fill="currentColor"/></svg>';

const RuxIconFormatAlignJustify = class {
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

exports.rux_icon_format_align_justify = RuxIconFormatAlignJustify;
