'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 10.9998H13C12.45 10.9998 12 10.5498 12 9.9998V5.9998C12 5.4498 12.45 4.9998 13 4.9998C13.55 4.9998 14 5.4498 14 5.9998V7.5898L18.31 3.2798C18.7 2.8898 19.33 2.8898 19.72 3.2798C20.11 3.6698 20.11 4.2998 19.72 4.6898L15.41 8.9998H17C17.55 8.9998 18 9.4498 18 9.9998C18 10.5498 17.55 10.9998 17 10.9998ZM16.69 14.9698L19.23 15.2598C20.24 15.3798 21 16.2298 20.99 17.2398V18.9698C20.99 20.0998 20.05 21.0398 18.92 20.9698C10.39 20.4398 3.55998 13.6198 3.02998 5.0798C2.95998 3.9498 3.89998 3.0098 5.02998 3.0098H6.75998C7.77998 3.0098 8.62998 3.7698 8.74998 4.7798L9.03998 7.2998C9.10998 7.9098 8.89998 8.5098 8.46998 8.9398L6.61998 10.7898C8.05998 13.6298 10.38 15.9398 13.21 17.3798L15.05 15.5398C15.48 15.1098 16.08 14.8998 16.69 14.9698Z" fill="currentColor"/></svg>';

const RuxIconPhoneCallback = class {
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

exports.rux_icon_phone_callback = RuxIconPhoneCallback;
