'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.3 12C18.3 15.09 18.84 18.18 19.94 21.12C19.98 21.23 20 21.33 20.01 21.43C20.01 21.76 19.77 22 19.38 22H4.63C4.23 22 4 21.76 4 21.43C4 21.34 4.02 21.23 4.07 21.12C5.16 18.18 5.71 15.09 5.71 12C5.71 8.91 5.16 5.82 4.06 2.88C4.02 2.77 4 2.67 4 2.57C4 2.23 4.23 2 4.63 2H19.37C19.77 2 20 2.23 20 2.57C20 2.66 19.98 2.77 19.94 2.88C18.85 5.82 18.3 8.91 18.3 12ZM7.7 12C7.7 14.72 7.31 17.4 6.54 20H17.45C16.68 17.4 16.29 14.72 16.29 12C16.29 9.28 16.68 6.6 17.45 4H6.54C7.31 6.6 7.7 9.28 7.7 12Z" fill="currentColor"/></svg>';

const RuxIconPanoramaVertical = class {
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

exports.rux_icon_panorama_vertical = RuxIconPanoramaVertical;
