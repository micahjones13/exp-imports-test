'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.99 4C19.99 2.9 19.1 2 18 2H10.83C10.3 2 9.79 2.21 9.41 2.59L4.59 7.41C4.21 7.79 4 8.3 4 8.83V20C4 21.1 4.9 22 6 22H18.01C19.11 22 20 21.1 20 20L19.99 4ZM8 19C7.45 19 7 18.55 7 18C7 17.45 7.45 17 8 17C8.55 17 9 17.45 9 18C9 18.55 8.55 19 8 19ZM15 18C15 18.55 15.45 19 16 19C16.55 19 17 18.55 17 18C17 17.45 16.55 17 16 17C15.45 17 15 17.45 15 18ZM8 15C7.45 15 7 14.55 7 14V12C7 11.45 7.45 11 8 11C8.55 11 9 11.45 9 12V14C9 14.55 8.55 15 8 15ZM11 18C11 18.55 11.45 19 12 19C12.55 19 13 18.55 13 18V16C13 15.45 12.55 15 12 15C11.45 15 11 15.45 11 16V18ZM12 13C11.45 13 11 12.55 11 12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12C13 12.55 12.55 13 12 13ZM15 14C15 14.55 15.45 15 16 15C16.55 15 17 14.55 17 14V12C17 11.45 16.55 11 16 11C15.45 11 15 11.45 15 12V14Z" fill="currentColor"/></svg>';

const RuxIconSimCard = class {
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

exports.rux_icon_sim_card = RuxIconSimCard;
