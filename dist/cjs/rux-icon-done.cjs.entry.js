'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 16.2L5.5 12.7C5.11 12.31 4.49 12.31 4.1 12.7C3.71 13.09 3.71 13.71 4.1 14.1L8.29 18.29C8.68 18.68 9.31 18.68 9.7 18.29L20.3 7.70001C20.69 7.31001 20.69 6.69001 20.3 6.30001C19.91 5.91001 19.29 5.91001 18.9 6.30001L9 16.2Z" fill="currentColor"/></svg>';

const RuxIconDone = class {
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

exports.rux_icon_done = RuxIconDone;
