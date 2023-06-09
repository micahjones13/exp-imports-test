'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 9C5 5.14 8.14 2 12 2C15.86 2 19 5.14 19 9C19 13.17 14.58 18.92 12.76 21.11C12.36 21.59 11.63 21.59 11.23 21.11C9.42 18.92 5 13.17 5 9ZM11.18 13.29L16.31 8.16C16.7 7.77 16.7 7.14 16.32 6.74C15.93 6.35 15.29 6.35 14.9 6.74L10.48 11.16L9.12 9.8C8.73 9.41 8.09 9.41 7.7 9.8C7.31 10.19 7.31 10.83 7.7 11.22L9.77 13.29C10.16 13.68 10.79 13.68 11.18 13.29Z" fill="currentColor"/></svg>';

const RuxIconWhereToVote = class {
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

exports.rux_icon_where_to_vote = RuxIconWhereToVote;
