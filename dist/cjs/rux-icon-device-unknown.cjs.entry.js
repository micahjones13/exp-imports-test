'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 1H17C18.1 1 19 1.9 19 3V21C19 22.1 18.1 23 17 23H7C5.9 23 5 22.1 5 21V3C5 1.9 5.9 1 7 1ZM7 19H17V5H7V19ZM11 16H13V18H11V16ZM9.65 10.19H9.52C8.93 10.19 8.5 9.61 8.7 9.05C9.22 7.53 10.74 6.52 12.51 6.75C14.06 6.95 15.3 8.24 15.49 9.79C15.6691 11.2227 14.8871 11.9194 14.1356 12.5889C13.6702 13.0036 13.2165 13.4078 13.01 13.97C12.93 14.17 12.89 14.39 12.89 14.64H11.13C11.13 14.22 11.19 13.87 11.29 13.56C11.29 13.55 11.29 13.53 11.3 13.51C11.3 13.4954 11.3054 13.4861 11.3122 13.4743C11.3146 13.47 11.3173 13.4654 11.32 13.46C11.38 13.3 11.44 13.15 11.52 13.01H11.53C11.8397 12.4785 12.2808 12.1291 12.6891 11.8058C13.2562 11.3565 13.76 10.9575 13.76 10.19C13.76 9.26 12.94 8.44 12.01 8.44C11.26 8.44 10.59 8.96 10.35 9.65C10.24 9.96 9.98 10.19 9.65 10.19Z" fill="currentColor"/></svg>';

const RuxIconDeviceUnknown = class {
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

exports.rux_icon_device_unknown = RuxIconDeviceUnknown;
