'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.19 4.47L11.19 1.36C11.7 1.13 12.3 1.13 12.81 1.36L19.81 4.47C20.53 4.79 21 5.51 21 6.3V11C21 16.55 17.16 21.74 12 23C6.84 21.74 3 16.55 3 11V6.3C3 5.51 3.47 4.79 4.19 4.47ZM6.7 13.7L9.29 16.29C9.68 16.68 10.32 16.68 10.7 16.29L17.29 9.7C17.68 9.31 17.68 8.68 17.29 8.29C16.9 7.9 16.27 7.9 15.88 8.29L10 14.17L8.11 12.29C7.72 11.9 7.09 11.9 6.7 12.29C6.31 12.68 6.31 13.31 6.7 13.7Z" fill="currentColor"/></svg>';

const RuxIconVerifiedUser = class {
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

exports.rux_icon_verified_user = RuxIconVerifiedUser;