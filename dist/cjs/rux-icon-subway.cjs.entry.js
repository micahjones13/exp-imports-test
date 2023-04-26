'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.8 2.8C20.47 3.84 22 6.05 22 8.86V22H2V8.86C2 6.05 3.53 3.84 6.2 2.8C8 2.09 10.14 2 12 2C13.86 2 16 2.09 17.8 2.8ZM17.01 9H7.01V14H17.01V9ZM8.5 17C7.94772 17 7.5 16.5523 7.5 16C7.5 15.4477 7.94772 15 8.5 15C9.05228 15 9.5 15.4477 9.5 16C9.5 16.5523 9.05228 17 8.5 17ZM15.5 17C14.9477 17 14.5 16.5523 14.5 16C14.5 15.4477 14.9477 15 15.5 15C16.0523 15 16.5 15.4477 16.5 16C16.5 16.5523 16.0523 17 15.5 17ZM18 9V15.5C18 17.04 16.84 18.29 15.35 18.46L16.5 19.62V20H14.83L13.33 18.5H10.67L9.17 20H7.5V19.62L8.65 18.46C7.16 18.29 6 17.04 6 15.5V9C6 6.37 9 6 12 6C15 6 18 6.37 18 9Z" fill="currentColor"/></svg>';

const RuxIconSubway = class {
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

exports.rux_icon_subway = RuxIconSubway;
