'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3ZM7 16C7 16.55 7.45 17 8 17C8.55 17 9 16.55 9 16V11C9 10.45 8.55 10 8 10C7.45 10 7 10.45 7 11V16ZM12 17C11.45 17 11 16.55 11 16V8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8V16C13 16.55 12.55 17 12 17ZM15 16C15 16.55 15.45 17 16 17C16.55 17 17 16.55 17 16V14C17 13.45 16.55 13 16 13C15.45 13 15 13.45 15 14V16Z" fill="currentColor"/></svg>';

const RuxIconInsertChart = class {
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

exports.rux_icon_insert_chart = RuxIconInsertChart;
