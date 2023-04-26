'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 7.41002V9.00002C20 10 23 15 24 20C21.5 16.5 18 14.9 13 14.9V16.58C13 17.47 11.92 17.92 11.29 17.29L6.69998 12.7C6.30998 12.31 6.30998 11.68 6.69998 11.29L11.29 6.70002C11.92 6.07002 13 6.52002 13 7.41002ZM5.18998 6.81002C5.85998 6.14002 6.99998 6.62002 6.99998 7.56002C6.99998 7.84002 6.88998 8.11002 6.68998 8.31002L2.99998 12L6.68998 15.69C6.88998 15.89 6.99998 16.16 6.99998 16.44C6.99998 17.38 5.85998 17.86 5.18998 17.18L0.70998 12.7C0.31998 12.31 0.31998 11.68 0.70998 11.29L5.18998 6.81002Z" fill="currentColor"/></svg>';

const RuxIconReplyAll = class {
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

exports.rux_icon_reply_all = RuxIconReplyAll;
