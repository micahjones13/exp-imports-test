'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 3H22C23.1 3 24 3.9 24 5L23.99 19C23.99 20.1 23.1 21 22 21H2C0.9 21 0 20.1 0 19V5C0 3.9 0.9 3 2 3ZM11 9C11 7.34 9.66 6 8 6C6.34 6 5 7.34 5 9C5 10.66 6.34 12 8 12C9.66 12 11 10.66 11 9ZM2 18V17C2 15 6 13.9 8 13.9C10 13.9 14 15 14 17V18H2ZM19.24 14H17.85C17.63 13.37 17.5 12.69 17.5 11.99C17.5 11.29 17.63 10.62 17.85 9.99H19.24C19.4 9.99 19.55 9.92 19.64 9.79L20.74 8.34C20.89 8.15 20.87 7.87 20.69 7.69L19.33 6.33C19.15 6.15 18.86 6.12 18.66 6.29C17.53 7.25 16.69 8.53 16.28 10C16.1 10.64 16 11.31 16 12C16 12.69 16.1 13.36 16.28 13.99C16.69 15.45 17.53 16.74 18.66 17.7C18.85 17.86 19.15 17.84 19.33 17.66L20.69 16.3C20.87 16.13 20.89 15.85 20.74 15.65L19.64 14.2C19.54 14.07 19.4 14 19.24 14Z" fill="currentColor"/></svg>';

const RuxIconContactPhone = class {
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

exports.rux_icon_contact_phone = RuxIconContactPhone;
