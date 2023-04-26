'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 4C18.16 4 18.72 4.42 18.92 5.01L20.89 10.68C20.96 10.89 21 11.12 21 11.34V18.5C21 19.33 20.32 20 19.5 20C18.67 20 18 19.32 18 18.5V18H6V18.5C6 19.33 5.33 20 4.5 20C3.67 20 3 19.33 3 18.5V11.34C3 11.11 3.04 10.89 3.11 10.68L5.08 5.01C5.29 4.42 5.84 4 6.5 4H17.5ZM5 13.5C5 14.33 5.67 15 6.5 15C7.33 15 8 14.33 8 13.5C8 12.67 7.33 12 6.5 12C5.67 12 5 12.67 5 13.5ZM17.5 15C16.67 15 16 14.33 16 13.5C16 12.67 16.67 12 17.5 12C18.33 12 19 12.67 19 13.5C19 14.33 18.33 15 17.5 15ZM6.27 6.18L5 10H19L17.73 6.18C17.59 5.78 17.21 5.5 16.78 5.5H7.22C6.79 5.5 6.41 5.78 6.27 6.18Z" fill="currentColor"/></svg>';

const RuxIconDriveEta = class {
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

exports.rux_icon_drive_eta = RuxIconDriveEta;
