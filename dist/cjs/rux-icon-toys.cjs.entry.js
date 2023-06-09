'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 12.0001C9 12.0001 6.5 9.50012 6.5 6.50012C6.5 3.93012 8.33 1.73012 10.74 1.15012C11.38 1.00012 12 1.47012 12 2.12012V12.0001ZM12 12.0001C12 9.00012 14.5 6.50012 17.5 6.50012C20.07 6.50012 22.27 8.33012 22.85 10.7401C23 11.3801 22.53 12.0001 21.88 12.0001H12ZM12 12.0001V21.8801C12 22.5301 12.62 23.0001 13.26 22.8501C15.67 22.2701 17.5 20.0701 17.5 17.5001C17.5 14.5001 15 12.0001 12 12.0001ZM12 12.0001C12 15.0001 9.5 17.5001 6.5 17.5001C3.93 17.5001 1.73 15.6701 1.15 13.2601C1 12.6201 1.47 12.0001 2.12 12.0001H12Z" fill="currentColor"/></svg>';

const RuxIconToys = class {
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

exports.rux_icon_toys = RuxIconToys;
