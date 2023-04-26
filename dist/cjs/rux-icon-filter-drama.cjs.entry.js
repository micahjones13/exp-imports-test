'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C15.64 4 18.67 6.59 19.35 10.04C21.95 10.22 24 12.36 24 15C24 17.76 21.76 20 19 20H6C2.69 20 0 17.31 0 14C0 10.9 2.35 8.36 5.36 8.04C6.61 5.64 9.11 4 12 4ZM6.17 18H19C20.85 18 22.32 16.31 21.93 14.4C21.65 12.97 20.31 12 18.86 12H17.49V11.73C17.49 8.84 15.36 6.27 12.48 6.02C10.48 5.85 8.69 6.76 7.59 8.22C9.77 8.82 11.45 10.61 11.88 12.85C12 13.45 11.5 14 10.89 14C10.41 14 10.01 13.65 9.91 13.17C9.53 11.36 7.92 10 6 10C3.66 10 1.79 12.01 2.02 14.39C2.22 16.47 4.08 18 6.17 18Z" fill="currentColor"/></svg>';

const RuxIconFilterDrama = class {
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

exports.rux_icon_filter_drama = RuxIconFilterDrama;
