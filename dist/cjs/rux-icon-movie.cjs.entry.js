'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 4L19.82 7.64C19.9 7.8 19.78 8 19.6 8H17.62C17.24 8 16.89 7.79 16.73 7.45L15 4H13L14.82 7.64C14.9 7.8 14.78 8 14.6 8H12.62C12.24 8 11.89 7.79 11.73 7.45L10 4H8L9.82 7.64C9.9 7.8 9.78 8 9.6 8H7.62C7.24 8 6.89 7.79 6.72 7.45L5 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V5C22 4.45 21.55 4 21 4H18Z" fill="currentColor"/></svg>';

const RuxIconMovie = class {
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

exports.rux_icon_movie = RuxIconMovie;
