'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 7V5C3 4.45 3.45 4 4 4H20C20.55 4 21 4.45 21 5V7C21 7.55 20.55 8 20 8H4C3.45 8 3 7.55 3 7ZM10 12H4C3.45 12 3 11.55 3 11C3 10.45 3.45 10 4 10H10C10.55 10 11 10.45 11 11C11 11.55 10.55 12 10 12ZM4 16H7C7.55 16 8 15.55 8 15C8 14.45 7.55 14 7 14H4C3.45 14 3 14.45 3 15C3 15.55 3.45 16 4 16ZM10.5 16H13.5C14.05 16 14.5 15.55 14.5 15C14.5 14.45 14.05 14 13.5 14H10.5C9.95 14 9.5 14.45 9.5 15C9.5 15.55 9.95 16 10.5 16ZM20 16H17C16.45 16 16 15.55 16 15C16 14.45 16.45 14 17 14H20C20.55 14 21 14.45 21 15C21 15.55 20.55 16 20 16ZM4 20C4.55 20 5 19.55 5 19C5 18.45 4.55 18 4 18C3.45 18 3 18.45 3 19C3 19.55 3.45 20 4 20ZM9 19C9 19.55 8.55 20 8 20C7.45 20 7 19.55 7 19C7 18.45 7.45 18 8 18C8.55 18 9 18.45 9 19ZM12 20C12.55 20 13 19.55 13 19C13 18.45 12.55 18 12 18C11.45 18 11 18.45 11 19C11 19.55 11.45 20 12 20ZM17 19C17 19.55 16.55 20 16 20C15.45 20 15 19.55 15 19C15 18.45 15.45 18 16 18C16.55 18 17 18.45 17 19ZM20 20C20.55 20 21 19.55 21 19C21 18.45 20.55 18 20 18C19.45 18 19 18.45 19 19C19 19.55 19.45 20 20 20ZM14 12H20C20.55 12 21 11.55 21 11C21 10.45 20.55 10 20 10H14C13.45 10 13 10.45 13 11C13 11.55 13.45 12 14 12Z" fill="currentColor"/></svg>';

const RuxIconLineStyle = class {
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

exports.rux_icon_line_style = RuxIconLineStyle;
