'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.37 16.26C8.15 16.71 7.68 17 7.17 17C6.17 17 5.52 15.95 5.97 15.06L7 13H5C4.45 13 4 12.55 4 12V8C4 7.45 4.45 7 5 7H9C9.55 7 10 7.45 10 8V12.53C10 12.84 9.93 13.14 9.79 13.42L8.37 16.26ZM18.37 16.26C18.15 16.71 17.68 17 17.17 17C16.17 17 15.52 15.95 15.97 15.06L17 13H15C14.45 13 14 12.55 14 12V8C14 7.45 14.45 7 15 7H19C19.55 7 20 7.45 20 8V12.53C20 12.84 19.93 13.14 19.79 13.42L18.37 16.26Z" fill="currentColor"/></svg>';

const RuxIconFormatQuote = class {
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

exports.rux_icon_format_quote = RuxIconFormatQuote;
