'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 5.10001V9.15001L19.4 16.55C20.55 13.67 19.99 10.27 17.65 7.94001L12.71 2.99001C12.32 2.60001 11.69 2.60001 11.3 2.99001L8.55996 5.71001L9.96996 7.12001L12 5.10001ZM3.68996 5.08001C3.29996 5.47001 3.29996 6.10001 3.68996 6.49001L5.76996 8.57001C3.22996 11.71 3.41996 16.32 6.33996 19.25C7.89996 20.8 9.94996 21.58 12 21.58C13.78 21.58 15.56 20.99 17.02 19.81L19.02 21.81C19.41 22.2 20.04 22.2 20.43 21.81C20.82 21.42 20.82 20.79 20.43 20.4L5.10996 5.08001C4.71996 4.69001 4.07996 4.69001 3.68996 5.08001ZM7.75996 17.83C8.88996 18.97 10.4 19.59 12 19.59V14.79L7.20996 10C6.42996 11.03 5.99996 12.27 5.99996 13.59C5.99996 15.19 6.61996 16.69 7.75996 17.83Z" fill="currentColor"/></svg>';

const RuxIconInvertColorsOff = class {
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

exports.rux_icon_invert_colors_off = RuxIconInvertColorsOff;
