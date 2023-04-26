'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.41 2.58L21.41 11.58C21.77 11.94 22 12.45 22 13C22 13.55 21.78 14.05 21.41 14.41L14.41 21.41C14.05 21.78 13.55 22 13 22C12.45 22 11.95 21.78 11.59 21.42L2.59 12.42C2.22 12.05 2 11.55 2 11V4C2 2.9 2.9 2 4 2H11C11.55 2 12.05 2.22 12.41 2.58ZM4 5.5C4 6.33 4.67 7 5.5 7C6.33 7 7 6.33 7 5.5C7 4.67 6.33 4 5.5 4C4.67 4 4 4.67 4 5.5Z" fill="currentColor"/></svg>';

const RuxIconLocalOffer = class {
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

exports.rux_icon_local_offer = RuxIconLocalOffer;
