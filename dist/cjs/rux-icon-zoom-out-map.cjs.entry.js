'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.3 6.7L3.85 8.15C3.54 8.46 3 8.24 3 7.79V3.5C3 3.22 3.22 3 3.5 3H7.79C8.24 3 8.46 3.54 8.15 3.85L6.7 5.3L8.88 7.46C9.27 7.85 9.27 8.49 8.88 8.88C8.49 9.27 7.85 9.27 7.46 8.88L5.3 6.7ZM17.3 5.3L15.85 3.85C15.54 3.54 15.76 3 16.21 3H20.5C20.78 3 21 3.22 21 3.5V7.79C21 8.24 20.46 8.46 20.15 8.15L18.7 6.7L16.54 8.88C16.15 9.27 15.51 9.27 15.12 8.88C14.73 8.49 14.73 7.85 15.12 7.46L17.3 5.3ZM8.15 20.15L6.7 18.7L8.88 16.54C9.27 16.15 9.27 15.51 8.88 15.12C8.49 14.73 7.85 14.73 7.46 15.12L5.3 17.3L3.85 15.85C3.54 15.54 3 15.76 3 16.21V20.5C3 20.78 3.22 21 3.5 21H7.79C8.24 21 8.46 20.46 8.15 20.15ZM18.7 17.3L20.15 15.85C20.46 15.54 21 15.76 21 16.21V20.5C21 20.78 20.78 21 20.5 21H16.21C15.76 21 15.54 20.46 15.85 20.15L17.3 18.7L15.12 16.54C14.73 16.15 14.73 15.51 15.12 15.12C15.51 14.73 16.15 14.73 16.54 15.12L18.7 17.3Z" fill="currentColor"/></svg>';

const RuxIconZoomOutMap = class {
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

exports.rux_icon_zoom_out_map = RuxIconZoomOutMap;
