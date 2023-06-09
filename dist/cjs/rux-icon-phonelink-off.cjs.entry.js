'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.36 2.20998C0.97 2.59998 0.97 3.22998 1.36 3.61998L2.47 4.72998C2.18 5.07998 2 5.51998 2 5.99998V17H1.5C0.67 17 0 17.67 0 18.5C0 19.33 0.67 20 1.5 20H17.73L19.37 21.64C19.76 22.03 20.39 22.03 20.78 21.64C21.17 21.25 21.17 20.62 20.78 20.23L2.77 2.20998C2.38 1.81998 1.75 1.81998 1.36 2.20998ZM22 4.99998C22 5.54998 21.55 5.99998 21 5.99998H9.39L7.39 3.99998H21C21.55 3.99998 22 4.44998 22 4.99998ZM24 8.99998V19C24 19.44 23.71 19.8 23.32 19.93L20.39 17H22V9.99998H18V14.61L16 12.61V8.99998C16 8.44998 16.45 7.99998 17 7.99998H23C23.55 7.99998 24 8.44998 24 8.99998ZM4 6.26998V17H14.73L4 6.26998Z" fill="currentColor"/></svg>';

const RuxIconPhonelinkOff = class {
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

exports.rux_icon_phonelink_off = RuxIconPhonelinkOff;
