'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM9 9H7V11C7 11.55 6.55 12 6 12C5.45 12 5 11.55 5 11V8C5 7.45 5.45 7 6 7H9C9.55 7 10 7.45 10 8C10 8.55 9.55 9 9 9ZM17 13C17 12.45 17.45 12 18 12C18.55 12 19 12.45 19 13V16C19 16.55 18.55 17 18 17H15C14.45 17 14 16.55 14 16C14 15.45 14.45 15 15 15H17V13ZM4 19.01H20C20.55 19.01 21 18.56 21 18.01V5.99C21 5.44 20.55 4.99 20 4.99H4C3.45 4.99 3 5.44 3 5.99V18.01C3 18.56 3.45 19.01 4 19.01Z" fill="currentColor"/></svg>';

const RuxIconAspectRatio = class {
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

exports.rux_icon_aspect_ratio = RuxIconAspectRatio;
