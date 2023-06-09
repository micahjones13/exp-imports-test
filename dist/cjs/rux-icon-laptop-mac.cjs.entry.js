'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 19C21.1 19 21.99 18.1 21.99 17L22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V17C2 18.1 2.9 19 4 19H0C0 20.1 0.9 21 2 21H22C23.1 21 24 20.1 24 19H20ZM5 6H19C19.55 6 20 6.45 20 7V16C20 16.55 19.55 17 19 17H5C4.45 17 4 16.55 4 16V7C4 6.45 4.45 6 5 6ZM11 19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19C13 18.45 12.55 18 12 18C11.45 18 11 18.45 11 19Z" fill="currentColor"/></svg>';

const RuxIconLaptopMac = class {
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

exports.rux_icon_laptop_mac = RuxIconLaptopMac;
