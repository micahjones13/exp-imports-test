'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 7C4.45 7 4 6.55 4 6C4 5.45 4.45 5 5 5H19C19.55 5 20 5.45 20 6C20 6.55 19.55 7 19 7H5ZM5 11H19C19.55 11 20 10.55 20 10C20 9.45 19.55 9 19 9H5C4.45 9 4 9.45 4 10C4 10.55 4.45 11 5 11ZM19 15H5C4.45 15 4 14.55 4 14C4 13.45 4.45 13 5 13H19C19.55 13 20 13.45 20 14C20 14.55 19.55 15 19 15ZM19 19H5C4.45 19 4 18.55 4 18C4 17.45 4.45 17 5 17H19C19.55 17 20 17.45 20 18C20 18.55 19.55 19 19 19Z" fill="currentColor"/></svg>';

const RuxIconViewHeadline = class {
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

exports.rux_icon_view_headline = RuxIconViewHeadline;
