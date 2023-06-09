'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.99 12.19C20.25 11.76 19.42 11.5 18.5 11.5C15.74 11.5 13.5 13.74 13.5 16.5C13.5 16.6248 13.5162 16.7442 13.5327 16.8662C13.5387 16.9103 13.5447 16.9548 13.55 17H5C3.9 17 3 16.1 3 15V5C3 3.9 3.9 3 5 3H19C20.1 3 20.99 3.9 20.99 5V12.19ZM11.1 10.05C11.66 10.33 12.33 10.33 12.89 10.05L18.51 7.25C18.81 7.1 19 6.79 19 6.45C19 5.78 18.3 5.35 17.71 5.65L12 8.5L6.29 5.65C5.7 5.35 5 5.79 5 6.45C5 6.79 5.19 7.1 5.49 7.25L11.1 10.05ZM18.5 13C16.57 13 15 14.57 15 16.5C15 18.43 16.57 20 18.5 20C20.43 20 22 18.43 22 16.5C22 14.57 20.43 13 18.5 13ZM20 17C20.28 17 20.5 16.78 20.5 16.5C20.5 16.22 20.28 16 20 16H17C16.72 16 16.5 16.22 16.5 16.5C16.5 16.78 16.72 17 17 17H20Z" fill="currentColor"/></svg>';

const RuxIconUnsubscribe = class {
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

exports.rux_icon_unsubscribe = RuxIconUnsubscribe;
