'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C3.45 5 3 4.55 3 4C3 3.45 3.45 3 4 3H20C20.55 3 21 3.45 21 4C21 4.55 20.55 5 20 5H4ZM3 14.8V9.21C3 8.76 3.54 8.54 3.85 8.85L6.64 11.65C6.84 11.85 6.84 12.16 6.64 12.36L3.85 15.15C3.54 15.47 3 15.25 3 14.8ZM4 21C3.45 21 3 20.55 3 20C3 19.45 3.45 19 4 19H20C20.55 19 21 19.45 21 20C21 20.55 20.55 21 20 21H4ZM12 17H20C20.55 17 21 16.55 21 16C21 15.45 20.55 15 20 15H12C11.45 15 11 15.45 11 16C11 16.55 11.45 17 12 17ZM12 9H20C20.55 9 21 8.55 21 8C21 7.45 20.55 7 20 7H12C11.45 7 11 7.45 11 8C11 8.55 11.45 9 12 9ZM20 13H12C11.45 13 11 12.55 11 12C11 11.45 11.45 11 12 11H20C20.55 11 21 11.45 21 12C21 12.55 20.55 13 20 13Z" fill="currentColor"/></svg>';

const RuxIconFormatIndentIncrease = class {
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

exports.rux_icon_format_indent_increase = RuxIconFormatIndentIncrease;
