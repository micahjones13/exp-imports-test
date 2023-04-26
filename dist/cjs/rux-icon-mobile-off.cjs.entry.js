'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 13.61V5H8.38997L5.31997 1.93C5.66997 1.37 6.28997 1 6.99997 1H17C18.1 1 19 1.9 19 3V15.61L17 13.61ZM17 16.44L3.60997 3.05C3.21997 2.66 2.58997 2.66 2.19997 3.05C1.80997 3.44 1.80997 4.07 2.19997 4.46L4.99997 7.27V21C4.99997 22.1 5.89997 23 6.99997 23H17C18.02 23 18.85 22.23 18.98 21.25L20 22.27C20.39 22.66 21.02 22.66 21.41 22.27C21.8 21.88 21.8 21.25 21.41 20.86L19 18.44L17 16.44ZM6.99997 19V9.27L16.73 19H6.99997Z" fill="currentColor"/></svg>';

const RuxIconMobileOff = class {
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

exports.rux_icon_mobile_off = RuxIconMobileOff;
