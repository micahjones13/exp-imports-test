'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 7C8 6.45 7.55 6 7 6C6.45 6 6 6.45 6 7V17C6 17.55 6.45 18 7 18C7.55 18 8 17.55 8 17V7ZM13.82 12L17.7 15.89C18.09 16.27 18.09 16.91 17.71 17.29C17.32 17.68 16.69 17.68 16.3 17.29L11.71 12.7C11.32 12.31 11.32 11.68 11.71 11.29L16.3 6.7C16.69 6.31 17.32 6.31 17.71 6.7C18.1 7.09 18.1 7.72 17.71 8.11L13.82 12Z" fill="currentColor"/></svg>';

const RuxIconFirstPage = class {
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

exports.rux_icon_first_page = RuxIconFirstPage;
