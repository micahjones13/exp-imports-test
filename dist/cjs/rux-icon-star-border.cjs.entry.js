'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.81 8.62L19.65 9.04C20.53 9.11 20.88 10.21 20.21 10.79L16.54 13.97L17.64 18.7C17.84 19.56 16.91 20.24 16.15 19.78L12 17.27L7.85001 19.77C7.09001 20.23 6.16001 19.55 6.36001 18.69L7.46001 13.97L3.79001 10.79C3.12001 10.21 3.48001 9.11 4.36001 9.04L9.19001 8.63L11.08 4.17C11.42 3.36 12.58 3.36 12.92 4.17L14.81 8.62ZM8.24001 17.67L12 15.4L15.77 17.68L14.77 13.4L18.09 10.52L13.71 10.14L12 6.1L10.3 10.13L5.92001 10.51L9.24001 13.39L8.24001 17.67Z" fill="currentColor"/></svg>';

const RuxIconStarBorder = class {
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

exports.rux_icon_star_border = RuxIconStarBorder;
