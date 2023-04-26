'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.15 3.39992C11.54 2.75992 12.46 2.75992 12.85 3.39992L16.56 9.47992C16.97 10.1399 16.49 10.9999 15.71 10.9999H8.28C7.5 10.9999 7.02 10.1399 7.43 9.47992L11.15 3.39992ZM17.5 21.9999C15.0147 21.9999 13 19.9852 13 17.4999C13 15.0146 15.0147 12.9999 17.5 12.9999C19.9853 12.9999 22 15.0146 22 17.4999C22 19.9852 19.9853 21.9999 17.5 21.9999ZM3 20.4999C3 21.0499 3.45 21.4999 4 21.4999H10C10.55 21.4999 11 21.0499 11 20.4999V14.4999C11 13.9499 10.55 13.4999 10 13.4999H4C3.45 13.4999 3 13.9499 3 14.4999V20.4999Z" fill="currentColor"/></svg>';

const RuxIconCategory = class {
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

exports.rux_icon_category = RuxIconCategory;
