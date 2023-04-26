'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4 1.01999C6.62 1.32999 3 5.51999 3 10.31V17C3 18.66 4.34 20 6 20H7C8.1 20 9 19.1 9 18V14C9 12.9 8.1 12 7 12H5V10.29C5 6.44999 7.96 3.10999 11.79 2.99999C15.76 2.88999 19 6.05999 19 9.99999V12H17C15.9 12 15 12.9 15 14V18C15 19.1 15.9 20 17 20H19V21H13C12.45 21 12 21.45 12 22C12 22.55 12.45 23 13 23H18C19.66 23 21 21.66 21 20V9.99999C21 4.82999 16.64 0.67999 11.4 1.01999Z" fill="currentColor"/></svg>';

const RuxIconHeadsetMic = class {
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

exports.rux_icon_headset_mic = RuxIconHeadsetMic;
