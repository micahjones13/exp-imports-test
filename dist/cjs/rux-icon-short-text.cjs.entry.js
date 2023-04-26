'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 9H5C4.45 9 4 9.45 4 10C4 10.55 4.45 11 5 11H19C19.55 11 20 10.55 20 10C20 9.45 19.55 9 19 9ZM13 13H5C4.45 13 4 13.45 4 14C4 14.55 4.45 15 5 15H13C13.55 15 14 14.55 14 14C14 13.45 13.55 13 13 13Z" fill="currentColor"/></svg>';

const RuxIconShortText = class {
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

exports.rux_icon_short_text = RuxIconShortText;
