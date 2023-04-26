'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 11C15.2386 11 13 8.76142 13 6C13 3.23858 15.2386 1 18 1C20.7614 1 23 3.23858 23 6C23 8.76142 20.7614 11 18 11ZM12.56 14.33C14.07 13.2 15.97 12.5 18 12.5C19.05 12.5 20.06 12.69 21 13.02V19C21 20.1 20.1 21 19 21H12V15.5C12 15.03 12.22 14.6 12.56 14.33ZM13.41 10.59C12.23 9.42 11.5 7.8 11.5 6C11.5 4.92 11.77 3.9 12.24 3H5C3.9 3 3 3.9 3 5V19C3 19.55 3.23 20.05 3.59 20.41L13.41 10.59Z" fill="currentColor"/></svg>';

const RuxIconStreetview = class {
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

exports.rux_icon_streetview = RuxIconStreetview;
