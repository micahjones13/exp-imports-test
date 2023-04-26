'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.91 6.70998C14.52 6.31998 13.89 6.31998 13.5 6.70998L8.90999 11.3C8.51999 11.69 8.51999 12.32 8.90999 12.71L13.5 17.3C13.89 17.69 14.52 17.69 14.91 17.3C15.3 16.91 15.3 16.28 14.91 15.89L11.03 12L14.91 8.11998C15.29 7.72998 15.29 7.08998 14.91 6.70998Z" fill="currentColor"/></svg>';

const RuxIconNavigateBefore = class {
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

exports.rux_icon_navigate_before = RuxIconNavigateBefore;
