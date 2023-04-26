'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.3 4.70998C18.91 4.31998 18.28 4.31998 17.89 4.70998L7 15.59V9.99998C7 9.44998 6.55 8.99998 6 8.99998C5.45 8.99998 5 9.44998 5 9.99998V18C5 18.55 5.45 19 6 19H14C14.55 19 15 18.55 15 18C15 17.45 14.55 17 14 17H8.41L19.3 6.10998C19.68 5.72998 19.68 5.08998 19.3 4.70998Z" fill="currentColor"/></svg>';

const RuxIconCallReceived = class {
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

exports.rux_icon_call_received = RuxIconCallReceived;
