'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 7C9.67 7 9 6.33 9 5.5C9 4.67 9.67 4 10.5 4H20.5C21.33 4 22 4.67 22 5.5C22 6.33 21.33 7 20.5 7H17V17.5C17 18.33 16.33 19 15.5 19C14.67 19 14 18.33 14 17.5V7H10.5ZM6 12H4.5C3.67 12 3 11.33 3 10.5C3 9.67 3.67 9 4.5 9H10.5C11.33 9 12 9.67 12 10.5C12 11.33 11.33 12 10.5 12H9V17.5C9 18.33 8.33 19 7.5 19C6.67 19 6 18.33 6 17.5V12Z" fill="currentColor"/></svg>';

const RuxIconFormatSize = class {
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

exports.rux_icon_format_size = RuxIconFormatSize;
