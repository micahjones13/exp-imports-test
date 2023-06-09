'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.03001 3.03L21.03 21.03C21.31 21.32 21.31 21.79 21.02 22.07C20.73 22.36 20.26 22.36 19.97 22.07L12.86 14.96C12.74 14.99 12.62 15 12.5 15H10C9.72001 15 9.50001 14.78 9.50001 14.5V11.6L8.00001 10.1V14.25C8.00001 14.66 7.66001 15 7.25001 15C6.84001 15 6.50001 14.66 6.50001 14.25V12.5H4.50001V14.25C4.50001 14.66 4.16001 15 3.75001 15C3.34001 15 3.00001 14.66 3.00001 14.25V9.75C3.00001 9.34 3.34001 9 3.75001 9C4.16001 9 4.50001 9.34 4.50001 9.75V11H6.50001V9.75C6.50001 9.44 6.69001 9.17 6.96001 9.06L1.98001 4.08C1.69001 3.79 1.69001 3.32 1.98001 3.03C2.27001 2.74 2.74001 2.74 3.03001 3.03ZM13 10.5V10.9L14.5 12.4V10.5C14.5 9.68 13.82 9 13 9H11.1L12.6 10.5H13ZM17.5 13V14.25C17.5 14.56 17.31 14.83 17.04 14.94L16 13.9V10C16 9.45 16.45 9 17 9H19.5C20.33 9 21 9.67 21 10.5V11.5C21 12.1 20.6 12.6 20.1 12.9L20.59 14.04C20.78 14.49 20.45 15 19.95 15C19.68 15 19.43 14.84 19.32 14.59L18.6 13H17.5ZM19.5 10.5H17.5V11.5H19.5V10.5Z" fill="currentColor"/></svg>';

const RuxIconHdrOff = class {
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

exports.rux_icon_hdr_off = RuxIconHdrOff;
