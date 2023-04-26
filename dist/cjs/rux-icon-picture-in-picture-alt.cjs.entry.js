'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23 19V4.98C23 3.88 22.1 3 21 3H3C1.9 3 1 3.88 1 4.98V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19ZM18 11H12C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17H18C18.55 17 19 16.55 19 16V12C19 11.45 18.55 11 18 11ZM4 19.02H20C20.55 19.02 21 18.57 21 18.02V5.97C21 5.42 20.55 4.97 20 4.97H4C3.45 4.97 3 5.42 3 5.97V18.02C3 18.57 3.45 19.02 4 19.02Z" fill="currentColor"/></svg>';

const RuxIconPictureInPictureAlt = class {
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

exports.rux_icon_picture_in_picture_alt = RuxIconPictureInPictureAlt;
