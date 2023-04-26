'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.65 4.35002L14.86 7.14002C14.54 7.46002 14.76 8.00002 15.21 8.00002H17V14.88C17 15.88 16.33 16.81 15.34 16.97C14.09 17.18 13 16.21 13 15V8.17002C13 6.08002 11.47 4.22002 9.39003 4.02002C7.01003 3.79002 5.00003 5.66002 5.00003 8.00002V15H3.21003C2.76003 15 2.54003 15.54 2.86003 15.85L5.65003 18.64C5.85003 18.84 6.16003 18.84 6.36003 18.64L9.15003 15.85C9.46003 15.54 9.24003 15 8.79003 15H7.00003V8.12002C7.00003 7.12002 7.67003 6.19002 8.66003 6.03002C9.91003 5.82002 11 6.79002 11 8.00002V14.83C11 16.92 12.53 18.78 14.61 18.98C16.99 19.21 19 17.34 19 15V8.00002H20.79C21.24 8.00002 21.46 7.46002 21.14 7.15002L18.35 4.36002C18.16 4.16002 17.84 4.16002 17.65 4.35002Z" fill="currentColor"/></svg>';

const RuxIconSwapCalls = class {
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

exports.rux_icon_swap_calls = RuxIconSwapCalls;
