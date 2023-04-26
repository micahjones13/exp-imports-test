'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 3V5H21C22.1 5 23 5.9 23 7V16C23 17.1 22.1 18 21 18H7C5.9 18 5 17.1 5 16V7C5 5.9 5.9 5 7 5H10V3C10 1.9 10.9 1 12 1H16C17.1 1 18 1.9 18 3ZM1 10C1 9.45 1.45 9 2 9C2.55 9 3 9.45 3 10V19C3 19.55 3.45 20 4 20H19C19 21.11 18.11 22 17 22H3C1.9 22 1 21.1 1 20V10ZM12 3H16V5H12V3ZM12 8.84V14.02C12 14.43 12.46 14.66 12.79 14.42L16.86 11.46C17.16 11.25 17.13 10.8 16.81 10.62L12.74 8.4C12.41 8.22 12 8.46 12 8.84Z" fill="currentColor"/></svg>';

const RuxIconShopTwo = class {
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

exports.rux_icon_shop_two = RuxIconShopTwo;
