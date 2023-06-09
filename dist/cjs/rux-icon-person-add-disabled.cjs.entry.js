'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.11998 2.41994C1.72998 2.02994 1.09998 2.02994 0.70998 2.41994C0.31998 2.80994 0.31998 3.43994 0.70998 3.82994L3.99998 7.11994V9.99994H1.99998C1.44998 9.99994 0.99998 10.4499 0.99998 10.9999C0.99998 11.5499 1.44998 11.9999 1.99998 11.9999H3.99998V13.9999C3.99998 14.5499 4.44998 14.9999 4.99998 14.9999C5.54998 14.9999 5.99998 14.5499 5.99998 13.9999V11.9999H8.87998L11.39 14.5099C9.18998 15.1099 6.99998 16.2999 6.99998 17.9999V18.9999C6.99998 19.5499 7.44998 19.9999 7.99998 19.9999H16.88L20.17 23.2899C20.56 23.6799 21.19 23.6799 21.58 23.2899C21.97 22.8999 21.97 22.2699 21.58 21.8799L2.11998 2.41994ZM14.6036 11.9657C14.5623 11.9602 14.5211 11.9548 14.48 11.9499L11.05 8.51994C11.0452 8.47888 11.0397 8.43781 11.0343 8.39661L11.0343 8.39649L11.0343 8.39638L11.0343 8.39636C11.0172 8.26706 11 8.13637 11 7.99994C11 5.78994 12.79 3.99994 15 3.99994C17.21 3.99994 19 5.78994 19 7.99994C19 10.2099 17.21 11.9999 15 11.9999C14.8636 11.9999 14.7329 11.9827 14.6036 11.9657L14.6036 11.9657ZM22.43 19.8999L16.69 14.1599C19.44 14.4999 23 15.8599 23 17.9999V18.9999C23 19.3999 22.76 19.7299 22.43 19.8999ZM5.99998 9.11994V9.99994H6.87998L5.99998 9.11994Z" fill="currentColor"/></svg>';

const RuxIconPersonAddDisabled = class {
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

exports.rux_icon_person_add_disabled = RuxIconPersonAddDisabled;
