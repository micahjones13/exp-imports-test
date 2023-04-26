'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.47 2 11.99 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 11.99 22C6.47 22 2 17.52 2 12ZM12 15.45L15.22 17.39C15.6 17.62 16.06 17.28 15.96 16.85L15.11 13.18L17.94 10.73C18.28 10.44 18.1 9.89 17.66 9.85L13.92 9.53L12.46 6.09C12.29 5.68 11.71 5.68 11.54 6.09L10.08 9.54L6.34 9.86C5.9 9.9 5.72 10.45 6.05 10.74L8.88 13.19L8.03 16.85C7.93 17.28 8.4 17.62 8.78 17.39L12 15.45Z" fill="currentColor"/></svg>';

const RuxIconStars = class {
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

exports.rux_icon_stars = RuxIconStars;
