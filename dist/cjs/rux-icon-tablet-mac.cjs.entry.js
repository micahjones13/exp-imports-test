'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 0H5.5C4.12 0 3 1.12 3 2.5V21.5C3 22.88 4.12 24 5.5 24H19.5C20.88 24 22 22.88 22 21.5V2.5C22 1.12 20.88 0 19.5 0ZM12.5 23C11.67 23 11 22.33 11 21.5C11 20.67 11.67 20 12.5 20C13.33 20 14 20.67 14 21.5C14 22.33 13.33 23 12.5 23ZM5 19H20V3H5V19Z" fill="currentColor"/></svg>';

const RuxIconTabletMac = class {
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

exports.rux_icon_tablet_mac = RuxIconTabletMac;
