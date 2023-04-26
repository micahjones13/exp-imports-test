'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 2H4.01001C2.91001 2 2.01001 2.9 2.01001 4V22L6.00001 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM13 12V14H11V12H13ZM12 10C12.55 10 13 9.55 13 9V7C13 6.45 12.55 6 12 6C11.45 6 11 6.45 11 7V9C11 9.55 11.45 10 12 10Z" fill="currentColor"/></svg>';

const RuxIconFeedback = class {
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

exports.rux_icon_feedback = RuxIconFeedback;
