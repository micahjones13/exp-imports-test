'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.67 5.65001L10.57 1.49001C11.15 1.18001 11.85 1.18001 12.43 1.49001L20.33 5.65001C20.74 5.86001 21 6.29001 21 6.75001C21 7.44001 20.44 8.00001 19.76 8.00001H3.25C2.56 8.00001 2 7.44001 2 6.75001C2 6.29001 2.26 5.86001 2.67 5.65001ZM4 11.5V15.5C4 16.33 4.67 17 5.5 17C6.33 17 7 16.33 7 15.5V11.5C7 10.67 6.33 10 5.5 10C4.67 10 4 10.67 4 11.5ZM10 11.5V15.5C10 16.33 10.67 17 11.5 17C12.33 17 13 16.33 13 15.5V11.5C13 10.67 12.33 10 11.5 10C10.67 10 10 10.67 10 11.5ZM21 20.5C21 21.33 20.33 22 19.5 22H3.5C2.67 22 2 21.33 2 20.5C2 19.67 2.67 19 3.5 19H19.5C20.33 19 21 19.67 21 20.5ZM16 11.5V15.5C16 16.33 16.67 17 17.5 17C18.33 17 19 16.33 19 15.5V11.5C19 10.67 18.33 10 17.5 10C16.67 10 16 10.67 16 11.5Z" fill="currentColor"/></svg>';

const RuxIconAccountBalance = class {
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

exports.rux_icon_account_balance = RuxIconAccountBalance;
