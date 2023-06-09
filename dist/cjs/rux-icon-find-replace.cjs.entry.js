'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.54 7.46C13.63 6.56 12.38 6 11 6C8.82 6 6.96 7.4 6.28 9.34C6.14 9.74 5.77 10 5.35 10C4.65 10 4.18 9.3 4.42 8.64C5.38 5.94 7.96 4 11 4C12.93 4 14.68 4.78 15.95 6.06L17.15 4.86C17.46 4.54 18 4.76 18 5.21V9.5C18 9.78 17.78 10 17.5 10H13.21C12.76 10 12.54 9.46 12.85 9.15L14.54 7.46ZM17.59 13.34C17.36 13.99 17.04 14.6 16.64 15.14L20.74 19.26C21.15 19.67 21.15 20.34 20.74 20.75C20.33 21.16 19.66 21.16 19.25 20.75L15.14 16.64C13.98 17.49 12.55 18 11 18C9.07 18 7.32 17.22 6.05 15.94L4.85 17.14C4.54 17.46 4 17.24 4 16.79V12.5C4 12.22 4.22 12 4.5 12H8.79C9.24 12 9.46 12.54 9.15 12.85L7.46 14.54C8.37 15.44 9.62 16 11 16C13.18 16 15.04 14.6 15.72 12.66C15.86 12.26 16.23 12 16.65 12C17.34 12 17.82 12.69 17.59 13.34Z" fill="currentColor"/></svg>';

const RuxIconFindReplace = class {
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

exports.rux_icon_find_replace = RuxIconFindReplace;
