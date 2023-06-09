'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 7.58 16.42 4 12 4C10.8 4 9.66 4.28 8.64 4.76L7.16 3.28C8.6 2.48 10.24 2 12 2C17.52 2 22 6.48 22 12C22 13.76 21.53 15.4 20.72 16.84L19.23 15.35C19.71 14.32 20 13.2 20 12ZM2.71 3.07C2.32 3.46 2.32 4.09 2.71 4.48L4.1 5.87C2.79 7.57 2 9.69 2 12C2 15.3 3.6 18.22 6.06 20.04C6.54 20.39 7.22 20.25 7.52 19.73C7.77 19.3 7.66 18.74 7.26 18.44C5.29 16.98 4 14.65 4 12C4 10.24 4.57 8.62 5.53 7.31L6.96 8.75C6.36 9.68 6 10.8 6 12C6 13.8 6.8 15.41 8.06 16.51C8.52 16.91 9.25 16.76 9.56 16.23L9.57 16.22C9.81 15.8 9.7 15.28 9.34 14.96C8.52 14.23 8 13.18 8 12C8 11.35 8.17 10.75 8.44 10.21L10.02 11.79L10 12C10 13.1 10.9 14 12 14L12.21 13.98L19.02 20.79C19.41 21.18 20.04 21.18 20.43 20.79C20.82 20.4 20.82 19.77 20.43 19.38L4.13 3.07C3.74 2.68 3.1 2.68 2.71 3.07ZM17.71 13.82C17.89 13.25 18 12.63 18 12C18 8.69 15.31 6 12 6C11.37 6 10.75 6.11 10.18 6.29L11.9 8.01C11.9139 8.01 11.9278 8.00785 11.9428 8.00554C11.96 8.00287 11.9786 8 12 8C14.21 8 16 9.79 16 12C16 12.02 15.9975 12.0375 15.995 12.055C15.9925 12.0725 15.99 12.09 15.99 12.11L17.71 13.82Z" fill="currentColor"/></svg>';

const RuxIconPortableWifiOff = class {
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

exports.rux_icon_portable_wifi_off = RuxIconPortableWifiOff;
