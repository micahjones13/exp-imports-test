'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 12.8L15.16 14.4C15.31 14.76 15.66 15 16.05 15C16.74 15 17.2 14.29 16.93 13.66L13.05 4.69C12.87 4.27 12.46 4 12 4C11.54 4 11.13 4.27 10.95 4.69L7.07 13.66C6.8 14.29 7.27 15 7.96 15C8.35 15 8.7 14.76 8.85 14.4L9.5 12.8H14.5ZM5 18C5 18.55 5.45 19 6 19H18C18.55 19 19 18.55 19 18C19 17.45 18.55 17 18 17H6C5.45 17 5 17.45 5 18ZM13.87 11L12 5.98L10.13 11H13.87Z" fill="currentColor"/></svg>';

const RuxIconTextFormat = class {
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

exports.rux_icon_text_format = RuxIconTextFormat;
