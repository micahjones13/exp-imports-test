'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 8H19.5C19.81 8 20.11 8.15 20.3 8.4L22.6 11.47C22.86 11.82 23 12.24 23 12.67V16C23 16.55 22.55 17 22 17H21C21 18.66 19.66 20 18 20C16.34 20 15 18.66 15 17H9C9 18.66 7.66 20 6 20C4.34 20 3 18.66 3 17C1.9 17 1 16.1 1 15V6C1 4.9 1.9 4 3 4H15C16.1 4 17 4.9 17 6V8ZM5 17C5 17.55 5.45 18 6 18C6.55 18 7 17.55 7 17C7 16.45 6.55 16 6 16C5.45 16 5 16.45 5 17ZM19.5 9.5L21.46 12H17V9.5H19.5ZM17 17C17 17.55 17.45 18 18 18C18.55 18 19 17.55 19 17C19 16.45 18.55 16 18 16C17.45 16 17 16.45 17 17Z" fill="currentColor"/></svg>';

const RuxIconLocalShipping = class {
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

exports.rux_icon_local_shipping = RuxIconLocalShipping;
