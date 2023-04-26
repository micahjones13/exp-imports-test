'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 7H17C19.76 7 22 9.24 22 12C22 14.76 19.76 17 17 17H7C4.24 17 2 14.76 2 12C2 9.24 4.24 7 7 7ZM14 12C14 13.66 15.34 15 17 15C18.66 15 20 13.66 20 12C20 10.34 18.66 9 17 9C15.34 9 14 10.34 14 12Z" fill="currentColor"/></svg>';

const RuxIconToggleOn = class {
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

exports.rux_icon_toggle_on = RuxIconToggleOn;
