'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.82 4.99997H10.06C11.49 4.99997 12.46 6.46997 11.9 7.78997L9.76 12.79C9.44 13.52 8.72 14 7.92 14H2C0.9 14 0 13.1 0 12V6.20997C0 5.67997 0.21 5.16997 0.6 4.79997L4.6 0.799971C5.03 0.359971 5.74 0.359971 6.18 0.799971C6.44 1.06997 6.56 1.44997 6.48 1.81997L5.82 4.99997ZM16.08 9.99997H22C23.1 9.99997 24 10.9 23.99 12V17.79C23.99 18.32 23.78 18.82 23.4 19.2L19.4 23.2C18.97 23.64 18.26 23.64 17.82 23.2C17.56 22.93 17.44 22.55 17.52 22.18L18.18 19H13.94C12.5 19 11.54 17.53 12.1 16.21L14.24 11.21C14.56 10.48 15.28 9.99997 16.08 9.99997Z" fill="currentColor"/></svg>';

const RuxIconThumbsUpDown = class {
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

exports.rux_icon_thumbs_up_down = RuxIconThumbsUpDown;
