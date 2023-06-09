'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.32 0.699971L16.56 8.93997C17.15 9.52997 17.15 10.48 16.56 11.06L11.06 16.56C10.77 16.85 10.38 17 10 17C9.62 17 9.23 16.85 8.94 16.56L3.44 11.06C2.85 10.48 2.85 9.52997 3.44 8.93997L8.59 3.78997L6.91 2.10997C6.52 1.71997 6.52 1.08997 6.91 0.699971C7.3 0.309971 7.93 0.309971 8.32 0.699971ZM10 5.20997L5.21 9.99997H14.79L10 5.20997ZM19 11.5C19 11.5 17 13.67 17 15C17 16.1 17.9 17 19 17C20.1 17 21 16.1 21 15C21 13.67 19 11.5 19 11.5ZM22 20H2C0.9 20 0 20.9 0 22C0 23.1 0.9 24 2 24H22C23.1 24 24 23.1 24 22C24 20.9 23.1 20 22 20Z" fill="currentColor"/></svg>';

const RuxIconFormatColorFill = class {
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

exports.rux_icon_format_color_fill = RuxIconFormatColorFill;
