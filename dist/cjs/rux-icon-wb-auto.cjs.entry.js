'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.72 7C22.3 7 21.95 7.3 21.87 7.7L20.8 13.29L19.49 7.78C19.38 7.32 18.97 7 18.5 7C18.03 7 17.62 7.32 17.52 7.78L16.21 13.29L15.14 7.7C15.06 7.3 14.7 7 14.29 7C14.285 7 14.2775 7.0025 14.27 7.005C14.2625 7.0075 14.255 7.01 14.25 7.01C12.78 5.18 10.53 4 8 4C3.58 4 0 7.58 0 12C0 16.42 3.58 20 8 20C11.17 20 13.9 18.15 15.2 15.48C15.4 15.8 15.75 16 16.14 16C16.65 16 17.09 15.65 17.21 15.16L18.5 9.9L19.79 15.16C19.91 15.65 20.36 16 20.86 16C21.38 16 21.82 15.64 21.94 15.14L23.55 8.06C23.68 7.52 23.27 7 22.72 7ZM9.15 12.65L8 9L6.85 12.65H9.15ZM10.09 15.4C10.21 15.76 10.55 16 10.93 16C11.55 16 11.98 15.39 11.78 14.8L9.34 7.94C9.13 7.38 8.6 7 8 7C7.4 7 6.87 7.38 6.67 7.95L4.23 14.81C4.02 15.39 4.45 16 5.07 16C5.45 16 5.78 15.76 5.91 15.4L6.4 14H9.6L10.09 15.4Z" fill="currentColor"/></svg>';

const RuxIconWbAuto = class {
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

exports.rux_icon_wb_auto = RuxIconWbAuto;
