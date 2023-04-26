'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.3 5.71021C17.91 5.32021 17.28 5.32021 16.89 5.71021L12 10.5902L7.10997 5.70021C6.71997 5.31021 6.08997 5.31021 5.69997 5.70021C5.30997 6.09021 5.30997 6.72021 5.69997 7.11021L10.59 12.0002L5.69997 16.8902C5.30997 17.2802 5.30997 17.9102 5.69997 18.3002C6.08997 18.6902 6.71997 18.6902 7.10997 18.3002L12 13.4102L16.89 18.3002C17.28 18.6902 17.91 18.6902 18.3 18.3002C18.69 17.9102 18.69 17.2802 18.3 16.8902L13.41 12.0002L18.3 7.11021C18.68 6.73021 18.68 6.09021 18.3 5.71021Z" fill="currentColor"/></svg>';

const RuxIconClose = class {
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

exports.rux_icon_close = RuxIconClose;
