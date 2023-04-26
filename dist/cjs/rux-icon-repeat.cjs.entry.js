'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 6.99994H7.00002V9.99994C7.00002 10.5499 6.55002 10.9999 6.00002 10.9999C5.45002 10.9999 5.00002 10.5499 5.00002 9.99994V5.99994C5.00002 5.44994 5.45002 4.99994 6.00002 4.99994H17V3.20994C17 2.75994 17.54 2.53994 17.85 2.84994L20.64 5.63994C20.84 5.83994 20.84 6.14994 20.64 6.34994L17.85 9.13994C17.54 9.45994 17 9.23994 17 8.78994V6.99994ZM7.00002 16.9999H17V13.9999C17 13.4499 17.45 12.9999 18 12.9999C18.55 12.9999 19 13.4499 19 13.9999V17.9999C19 18.5499 18.55 18.9999 18 18.9999H7.00002V20.7899C7.00002 21.2399 6.46002 21.4599 6.15002 21.1499L3.36002 18.3599C3.16002 18.1599 3.16002 17.8499 3.36002 17.6499L6.15002 14.8599C6.46002 14.5399 7.00002 14.7599 7.00002 15.2099V16.9999Z" fill="currentColor"/></svg>';

const RuxIconRepeat = class {
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

exports.rux_icon_repeat = RuxIconRepeat;
