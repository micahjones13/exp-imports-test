'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.00002 6.99994H17V8.78994C17 9.23994 17.54 9.45994 17.85 9.13994L20.64 6.34994C20.84 6.14994 20.84 5.83994 20.64 5.63994L17.85 2.84994C17.54 2.53994 17 2.75994 17 3.20994V4.99994H6.00002C5.45002 4.99994 5.00002 5.44994 5.00002 5.99994V9.99994C5.00002 10.5499 5.45002 10.9999 6.00002 10.9999C6.55002 10.9999 7.00002 10.5499 7.00002 9.99994V6.99994ZM17 16.9999H7.00002V15.2099C7.00002 14.7599 6.46002 14.5399 6.15002 14.8599L3.36002 17.6499C3.16002 17.8499 3.16002 18.1599 3.36002 18.3599L6.15002 21.1499C6.46002 21.4599 7.00002 21.2399 7.00002 20.7899V18.9999H18C18.55 18.9999 19 18.5499 19 17.9999V13.9999C19 13.4499 18.55 12.9999 18 12.9999C17.45 12.9999 17 13.4499 17 13.9999V16.9999ZM13 9.80994V14.2499C13 14.6599 12.66 14.9999 12.25 14.9999C11.84 14.9999 11.5 14.6599 11.5 14.2499V10.9999H10.62C10.28 10.9999 10 10.7199 10 10.3799C10 10.1499 10.13 9.92994 10.34 9.82994L11.83 9.08994C11.94 9.02994 12.06 8.99994 12.19 8.99994C12.64 8.99994 13 9.35994 13 9.80994Z" fill="currentColor"/></svg>';

const RuxIconRepeatOne = class {
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

exports.rux_icon_repeat_one = RuxIconRepeatOne;
