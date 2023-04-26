'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 8H8V6C8 5.45 8.45 5 9 5C9.55 5 10 5.45 10 6V9C10 9.55 9.55 10 9 10H6C5.45 10 5 9.55 5 9C5 8.45 5.45 8 6 8ZM8 16H6C5.45 16 5 15.55 5 15C5 14.45 5.45 14 6 14H9C9.55 14 10 14.45 10 15V18C10 18.55 9.55 19 9 19C8.45 19 8 18.55 8 18V16ZM15 19C15.55 19 16 18.55 16 18V16H18C18.55 16 19 15.55 19 15C19 14.45 18.55 14 18 14H15C14.45 14 14 14.45 14 15V18C14 18.55 14.45 19 15 19ZM16 6V8H18C18.55 8 19 8.45 19 9C19 9.55 18.55 10 18 10H15C14.45 10 14 9.55 14 9V6C14 5.45 14.45 5 15 5C15.55 5 16 5.45 16 6Z" fill="currentColor"/></svg>';

const RuxIconFullscreenExit = class {
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

exports.rux_icon_fullscreen_exit = RuxIconFullscreenExit;
