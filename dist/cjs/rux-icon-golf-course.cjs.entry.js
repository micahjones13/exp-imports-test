'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 20C16 19.01 13.84 18.19 11 18.03V8.98005L15.22 6.83005C15.95 6.46005 15.95 5.40005 15.21 5.04005L10.45 2.71005C9.78 2.38005 9 2.86005 9 3.60005V19C9 19.55 8.55 20 8 20C7.45 20 7 19.55 7 19V18.27C5.21 18.62 4 19.26 4 20C4 21.1 6.69 22 10 22C13.31 22 16 21.1 16 20ZM18 19.5C18 20.3285 18.6716 21 19.5 21C20.3284 21 21 20.3285 21 19.5C21 18.6716 20.3284 18 19.5 18C18.6716 18 18 18.6716 18 19.5Z" fill="currentColor"/></svg>';

const RuxIconGolfCourse = class {
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

exports.rux_icon_golf_course = RuxIconGolfCourse;
