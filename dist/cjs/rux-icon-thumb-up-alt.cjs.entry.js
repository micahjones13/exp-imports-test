'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.58 7.59997L13.12 2.05997C13.7 1.46997 14.64 1.46997 15.23 2.04997C15.59 2.40997 15.74 2.91997 15.64 3.41997L14.69 7.99997H20.34C22.49 7.99997 23.94 10.2 23.1 12.18L19.84 19.79C19.52 20.52 18.8 21 18 21H9C7.9 21 7 20.1 7 19V9.00997C7 8.47997 7.21 7.96997 7.58 7.59997ZM5 19C5 20.1 4.1 21 3 21C1.9 21 1 20.1 1 19V11C1 9.89997 1.9 8.99997 3 8.99997C4.1 8.99997 5 9.89997 5 11V19Z" fill="currentColor"/></svg>';

const RuxIconThumbUpAlt = class {
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

exports.rux_icon_thumb_up_alt = RuxIconThumbUpAlt;
