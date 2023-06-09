'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6ZM19 11.9C19 12.53 18.42 13 17.8 12.87C16.4 12.59 15 11.88 14 11.05V14.5H17C18.1 14.5 19 15.4 19 16.5V21C19 21.55 18.55 22 18 22C17.45 22 17 21.55 17 21V17H12C10.9 17 10 16.1 10 15V9.1C10 8.07 10.73 7.15 11.75 7.03C12.22 6.97 12.63 7.07 13 7.28H13.01C13.015 7.28 13.0175 7.2825 13.02 7.285C13.0225 7.2875 13.025 7.29 13.03 7.29C13.26 7.4 13.47 7.55 13.64 7.74L14.93 9.17C15.73 10.05 16.91 10.72 18.16 10.93C18.64 11.01 19 11.41 19 11.9ZM14.9 18H12.83C12.42 19.16 11.31 20 10 20C8.34 20 7 18.66 7 17C7 15.69 7.84 14.59 9 14.17V12.1C6.72 12.56 5 14.58 5 17C5 19.76 7.24 22 10 22C12.42 22 14.44 20.28 14.9 18Z" fill="currentColor"/></svg>';

const RuxIconAccessible = class {
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

exports.rux_icon_accessible = RuxIconAccessible;
