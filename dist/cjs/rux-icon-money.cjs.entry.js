'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6ZM5 9C5 8.45 5.45 8 6 8C6.55 8 7 8.45 7 9V15C7 15.55 6.55 16 6 16C5.45 16 5 15.55 5 15V9ZM12 16H9C8.45 16 8 15.55 8 15V9C8 8.45 8.45 8 9 8H12C12.55 8 13 8.45 13 9V15C13 15.55 12.55 16 12 16ZM15 16H18C18.55 16 19 15.55 19 15V9C19 8.45 18.55 8 18 8H15C14.45 8 14 8.45 14 9V15C14 15.55 14.45 16 15 16ZM16 10H17V14H16V10ZM10 10H11V14H10V10ZM5 18H19C19.55 18 20 17.55 20 17V7C20 6.45 19.55 6 19 6H5C4.45 6 4 6.45 4 7V17C4 17.55 4.45 18 5 18Z" fill="currentColor"/></svg>';

const RuxIconMoney = class {
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

exports.rux_icon_money = RuxIconMoney;
