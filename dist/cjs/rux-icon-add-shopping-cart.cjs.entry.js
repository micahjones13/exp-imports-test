'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 8C13 8.55 12.55 9 12 9C11.45 9 11 8.55 11 8V6H9C8.45 6 8 5.55 8 5C8 4.45 8.45 4 9 4H11V2C11 1.45 11.45 1 12 1C12.55 1 13 1.45 13 2V4H15C15.55 4 16 4.45 16 5C16 5.55 15.55 6 15 6H13V8ZM5.01 20C5.01 18.9 5.9 18 7 18C8.1 18 9 18.9 9 20C9 21.1 8.1 22 7 22C5.9 22 5.01 21.1 5.01 20ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18ZM15.55 13H8.1L7 15H18C18.55 15 19 15.45 19 16C19 16.55 18.55 17 18 17H7C5.48 17 4.52 15.37 5.25 14.03L6.6 11.59L3 4H2C1.45 4 1 3.55 1 3C1 2.45 1.45 2 2 2H3.64C4.02 2 4.38 2.22 4.54 2.57L8.53 11H15.55L18.94 4.87C19.2 4.39 19.81 4.22 20.29 4.48C20.77 4.75 20.95 5.36 20.68 5.84L17.3 11.97C16.96 12.59 16.3 13 15.55 13Z" fill="currentColor"/></svg>';

const RuxIconAddShoppingCart = class {
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

exports.rux_icon_add_shopping_cart = RuxIconAddShoppingCart;
