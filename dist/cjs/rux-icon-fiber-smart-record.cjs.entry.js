'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 12C1 16.4183 4.58172 20 9 20C13.4183 20 17 16.4183 17 12C17 7.58172 13.4183 4 9 4C4.58172 4 1 7.58172 1 12ZM18.32 4.73C17.71 4.45 17 4.87 17 5.55V5.73C17 6.1 17.23 6.42 17.57 6.58C19.6 7.54 21 9.61 21 12C21 14.39 19.6 16.46 17.57 17.42C17.23 17.58 17 17.89 17 18.26V18.44C17 19.12 17.71 19.55 18.32 19.26C21.08 18.01 23 15.23 23 12C23 8.77 21.08 5.99 18.32 4.73Z" fill="currentColor"/></svg>';

const RuxIconFiberSmartRecord = class {
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

exports.rux_icon_fiber_smart_record = RuxIconFiberSmartRecord;
