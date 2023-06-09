'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM10 8L11.62 5.99C11.82 5.74 12.2 5.74 12.4 5.99L14 8H10ZM18 14V10L20.01 11.62C20.26 11.82 20.26 12.2 20.01 12.4L18 14ZM6 10L3.99 11.62C3.74 11.82 3.74 12.2 3.99 12.4L6 14V10ZM10 16H14L12.4 18.01C12.2 18.26 11.82 18.26 11.62 18.01L10 16ZM4 19.01H20C20.55 19.01 21 18.56 21 18.01V5.99C21 5.44 20.55 4.99 20 4.99H4C3.45 4.99 3 5.44 3 5.99V18.01C3 18.56 3.45 19.01 4 19.01Z" fill="currentColor"/></svg>';

const RuxIconSettingsOverscan = class {
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

exports.rux_icon_settings_overscan = RuxIconSettingsOverscan;
