'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.15 10.15C18.56 11.74 16.41 12.24 14.88 11.53L13.41 13L19.59 19.18C19.98 19.57 19.98 20.2 19.59 20.59C19.2 20.98 18.57 20.98 18.18 20.59L12 14.41L5.82 20.57C5.43 20.96 4.8 20.96 4.41 20.57C4.02 20.18 4.02 19.55 4.41 19.16L13.46 10.11C12.75 8.57996 13.25 6.42996 14.84 4.83996C16.76 2.92996 19.5 2.56996 20.96 4.02996C22.43 5.49996 22.06 8.23996 20.15 10.15ZM10.93 10.51L8.1 13.34L3.91 9.15996C2.68 7.91996 2.42 6.08996 3.13 4.59996C3.43 3.97996 4.26 3.84996 4.74 4.32996L10.93 10.51Z" fill="currentColor"/></svg>';

const RuxIconLocalDining = class {
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

exports.rux_icon_local_dining = RuxIconLocalDining;