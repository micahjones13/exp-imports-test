'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.28 4.55L14 6H19C19.55 6 20 6.45 20 7V15C20 15.55 19.55 16 19 16H13.61C13.24 16 12.89 15.79 12.72 15.45L12 14H7V20C7 20.55 6.55 21 6 21C5.45 21 5 20.55 5 20V5C5 4.45 5.45 4 6 4H12.38C12.76 4 13.11 4.21 13.28 4.55ZM14 14H18V8H13L12 6H7V12H13L14 14Z" fill="currentColor"/></svg>';

const RuxIconOutlinedFlag = class {
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

exports.rux_icon_outlined_flag = RuxIconOutlinedFlag;
