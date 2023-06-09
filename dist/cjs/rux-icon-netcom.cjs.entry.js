'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 2C17.6569 2 19 3.34315 19 5C19 6.65685 17.6569 8 16 8C15.8259 8 15.6553 7.98518 15.4894 7.95672L14.8034 9.14676C15.3137 9.64825 15.6902 10.2856 15.874 11.0002L18.2676 10.9999C18.6134 10.4022 19.2597 10 20 10C21.1046 10 22 10.8954 22 12C22 13.1046 21.1046 14 20 14C19.2602 14 18.6142 13.5983 18.2682 13.0011L15.8738 13.0008C15.6717 13.7853 15.2375 14.4767 14.6488 14.9974L15.2128 16.1044C15.4637 16.0363 15.7276 16 16 16C17.6569 16 19 17.3431 19 19C19 20.6569 17.6569 22 16 22C14.3431 22 13 20.6569 13 19C13 18.3508 13.2062 17.7498 13.5567 17.2589L12.8669 15.9058C12.5878 15.9675 12.2977 16 12 16C11.2582 16 10.5635 15.7981 9.96801 15.4462L7.75736 17.6569L7.59355 17.4912C7.85196 17.9345 8 18.4499 8 19C8 20.6569 6.65685 22 5 22C3.34315 22 2 20.6569 2 19C2 17.3431 3.34315 16 5 16C5.55006 16 6.06555 16.148 6.50879 16.4065L6.34315 16.2426L8.55383 14.032C8.20193 13.4365 8 12.7418 8 12C8 9.79086 9.79086 8 12 8C12.3705 8 12.7293 8.05038 13.0698 8.14467L13.7446 6.97823C13.281 6.45014 13 5.75789 13 5C13 3.34315 14.3431 2 16 2ZM12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10Z" fill="currentColor"/></svg>';

const RuxIconNetcom = class {
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

exports.rux_icon_netcom = RuxIconNetcom;
