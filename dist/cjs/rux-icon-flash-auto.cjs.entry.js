'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 3V13C3 13.55 3.45 14 4 14H6V21.15C6 21.66 6.67 21.84 6.93 21.4L12.12 12.5C12.51 11.83 12.03 11 11.26 11H9L12.38 3.41C12.67 2.74 12.18 2 11.46 2H4C3.45 2 3 2.45 3 3ZM18 2C17.4 2 16.87 2.38 16.66 2.94L14.22 9.8C14.02 10.39 14.45 11 15.07 11C15.45 11 15.79 10.76 15.91 10.4L16.4 9H19.6L20.09 10.4C20.22 10.76 20.55 11 20.93 11C21.55 11 21.98 10.39 21.77 9.81L19.33 2.95C19.13 2.38 18.6 2 18 2ZM18 4L16.85 7.65H19.15L18 4Z" fill="currentColor"/></svg>';

const RuxIconFlashAuto = class {
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

exports.rux_icon_flash_auto = RuxIconFlashAuto;
