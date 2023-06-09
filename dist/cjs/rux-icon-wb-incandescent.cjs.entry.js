'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 3.0498V6.8598C16.79 7.8998 18 9.8298 18 12.0598C18 15.6098 14.89 18.4498 11.25 18.0098C8.63 17.6898 6.47 15.5998 6.07 12.9898C5.68 10.3798 6.96 8.0398 9 6.8598V3.0498C9 2.4998 9.45 2.0498 10 2.0498H14C14.55 2.0498 15 2.4998 15 3.0498ZM3.01 11.0498H1.99C1.44 11.0498 1 11.4898 1 12.0398V12.0498C1 12.5998 1.44 13.0398 1.99 13.0398H3C3.55 13.0398 3.99 12.5998 3.99 12.0498V12.0398C4 11.4898 3.56 11.0498 3.01 11.0498ZM5.66 19.7898C5.27 20.1798 4.64 20.1798 4.25 19.7898C3.86 19.3998 3.86 18.7798 4.24 18.3798L4.63 17.9898C5.02 17.5998 5.65 17.5998 6.04 17.9898L6.05 17.9998C6.43 18.3798 6.44 19.0098 6.05 19.3998L5.66 19.7898ZM12 22.9998H11.99C11.44 22.9998 11 22.5598 11 22.0098V21.0498C11 20.4998 11.44 20.0598 11.99 20.0598H12C12.55 20.0598 12.99 20.4998 12.99 21.0498V22.0098C12.99 22.5598 12.55 22.9998 12 22.9998ZM20 12.0398V12.0498C20 12.5998 20.44 13.0398 20.99 13.0398H22C22.55 13.0398 22.99 12.5998 22.99 12.0498V12.0398C22.99 11.4898 22.55 11.0498 22 11.0498H20.99C20.44 11.0498 20 11.4898 20 12.0398ZM18.33 19.7998L17.94 19.4098C17.55 19.0198 17.55 18.3998 17.95 17.9998C18.33 17.6198 18.96 17.6098 19.35 17.9998L19.74 18.3898C20.13 18.7798 20.13 19.4098 19.74 19.7998C19.35 20.1898 18.72 20.1898 18.33 19.7998Z" fill="currentColor"/></svg>';

const RuxIconWbIncandescent = class {
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

exports.rux_icon_wb_incandescent = RuxIconWbIncandescent;
