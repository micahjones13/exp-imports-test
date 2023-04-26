'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C7.41001 3 3.86001 4.53 0.89001 6.59C0.40001 6.92 0.30001 7.59 0.67001 8.05L10.45 20.09C11.25 21.07 12.75 21.08 13.55 20.09L23.33 8.07C23.7 7.61 23.6 6.94 23.11 6.61C20.14 4.54 16.59 3 12 3ZM12 16C11.45 16 11 15.55 11 15V11C11 10.45 11.45 10 12 10C12.55 10 13 10.45 13 11V15C13 15.55 12.55 16 12 16ZM11 6V8H13V6H11Z" fill="currentColor"/></svg>';

const RuxIconPermScanWifi = class {
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

exports.rux_icon_perm_scan_wifi = RuxIconPermScanWifi;
