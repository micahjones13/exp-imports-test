'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.05 4.36998C18.72 3.90998 18.78 3.28998 19.18 2.88998C19.68 2.38998 20.51 2.44998 20.94 3.00998C23.63 6.57998 23.68 11.27 21.11 14.78C20.68 15.37 19.81 15.42 19.3 14.91C18.91 14.52 18.83 13.9 19.14 13.44C21 10.62 20.98 7.04998 19.05 4.36998ZM15.47 7.75998C15.28 7.28998 15.37 6.75998 15.72 6.40998C16.3 5.81998 17.31 5.94998 17.71 6.69998C18.43 8.11998 18.47 9.71998 17.83 11.11C17.47 11.89 16.41 12.02 15.81 11.42C15.46 11.08 15.36 10.56 15.52 10.1C15.79 9.33998 15.77 8.50998 15.47 7.75998ZM9.43 5.03998L12.96 8.56998C12.76 6.70998 11.29 5.23998 9.43 5.03998ZM3.71 4.96998C3.32 4.57998 3.32 3.94998 3.71 3.55998C4.1 3.16998 4.73 3.16998 5.12 3.55998L20.43 18.88C20.82 19.27 20.82 19.9 20.43 20.29C20.04 20.68 19.41 20.68 19.02 20.29L16.71 17.98C16.89 18.3 17 18.63 17 19V20C17 20.55 16.55 21 16 21H2C1.45 21 1 20.55 1 20V19C1 16.34 6.33 15 9 15C10.78 15 13.74 15.6 15.52 16.78L11.12 12.38C10.23 12.94 9.11 13.18 7.92 12.85C6.59 12.48 5.51 11.41 5.15 10.08C4.83 8.88998 5.06 7.76998 5.62 6.87998L3.71 4.96998Z" fill="currentColor"/></svg>';

const RuxIconVoiceOverOff = class {
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

exports.rux_icon_voice_over_off = RuxIconVoiceOverOff;
