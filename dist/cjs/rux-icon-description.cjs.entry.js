'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.17 2C13.7 2 14.21 2.21 14.59 2.59L19.41 7.42C19.79 7.79 20 8.3 20 8.83V20C20 21.1 19.1 22 18 22H5.99C4.89 22 4 21.1 4 20V4C4 2.9 4.9 2 6 2H13.17ZM9 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H9C8.45 16 8 16.45 8 17C8 17.55 8.45 18 9 18ZM15 14H9C8.45 14 8 13.55 8 13C8 12.45 8.45 12 9 12H15C15.55 12 16 12.45 16 13C16 13.55 15.55 14 15 14ZM13 3.5V8C13 8.55 13.45 9 14 9H18.5L13 3.5Z" fill="currentColor"/></svg>';

const RuxIconDescription = class {
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

exports.rux_icon_description = RuxIconDescription;
