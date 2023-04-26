'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.00002 3H22C23.1 3 24 3.9 24 5V19C24 20.1 23.1 21 22 21H7.00002C6.31002 21 5.77002 20.64 5.41002 20.12L0.370017 12.56C0.150017 12.22 0.150017 11.79 0.370017 11.45L5.41002 3.88C5.77002 3.35 6.31002 3 7.00002 3ZM16.89 16.3C17.28 16.69 17.91 16.69 18.3 16.3C18.68 15.91 18.68 15.27 18.3 14.89L15.41 12L18.3 9.11C18.69 8.72 18.69 8.09 18.3 7.7C17.91 7.31 17.28 7.31 16.89 7.7L14 10.59L11.11 7.7C10.72 7.31 10.09 7.31 9.70002 7.7C9.31002 8.09 9.31002 8.72 9.70002 9.11L12.59 12L9.70002 14.89C9.31002 15.28 9.31002 15.91 9.70002 16.3C10.09 16.69 10.72 16.69 11.11 16.3L14 13.41L16.89 16.3Z" fill="currentColor"/></svg>';

const RuxIconBackspace = class {
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

exports.rux_icon_backspace = RuxIconBackspace;
