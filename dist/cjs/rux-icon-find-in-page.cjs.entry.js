'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 8.83V19.59L16.17 15.75C16.88 14.67 17.2 13.31 16.87 11.85C16.44 9.92 14.82 8.4 12.87 8.07C9.49 7.5 6.6 10.33 7.04 13.68C7.36 16.03 9.39 17.88 11.76 17.99C12.87 18.05 13.9 17.73 14.76 17.17L19.19 21.6C18.85 21.85 18.45 22 18 22H5.99C4.89 22 4 21.1 4 20L4.01 4C4.01 2.9 4.9 2 6 2H13.17C13.7 2 14.21 2.21 14.58 2.59L19.41 7.42C19.79 7.79 20 8.3 20 8.83ZM12 16C10.34 16 9 14.66 9 13C9 11.34 10.34 10 12 10C13.66 10 15 11.34 15 13C15 14.66 13.66 16 12 16Z" fill="currentColor"/></svg>';

const RuxIconFindInPage = class {
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

exports.rux_icon_find_in_page = RuxIconFindInPage;
