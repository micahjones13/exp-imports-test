'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 3.49996C8.5 4.32996 7.83 4.99996 7 4.99996C6.17 4.99996 5.5 4.32996 5.5 3.49996C5.5 2.83996 6.16 1.85996 6.6 1.27996C6.8 1.01996 7.19 1.01996 7.39 1.27996C7.84 1.85996 8.5 2.83996 8.5 3.49996ZM12 4.99996C12.83 4.99996 13.5 4.32996 13.5 3.49996C13.5 2.83996 12.84 1.85996 12.39 1.27996C12.19 1.01996 11.8 1.01996 11.6 1.27996C11.16 1.85996 10.5 2.83996 10.5 3.49996C10.5 4.32996 11.17 4.99996 12 4.99996ZM17 4.99996C17.83 4.99996 18.5 4.32996 18.5 3.49996C18.5 2.83996 17.84 1.85996 17.39 1.27996C17.19 1.01996 16.8 1.01996 16.6 1.27996C16.16 1.85996 15.5 2.83996 15.5 3.49996C15.5 4.32996 16.17 4.99996 17 4.99996ZM18.92 8.00996C18.72 7.41996 18.16 6.99996 17.5 6.99996H6.5C5.84 6.99996 5.29 7.41996 5.08 8.00996L3.11 13.68C3.04 13.89 3 14.11 3 14.34V21.5C3 22.33 3.67 23 4.5 23C5.33 23 6 22.33 6 21.5V21H18V21.5C18 22.32 18.67 23 19.5 23C20.32 23 21 22.33 21 21.5V14.34C21 14.12 20.96 13.89 20.89 13.68L18.92 8.00996ZM5 16.5C5 17.33 5.67 18 6.5 18C7.33 18 8 17.33 8 16.5C8 15.67 7.33 15 6.5 15C5.67 15 5 15.67 5 16.5ZM17.5 18C16.67 18 16 17.33 16 16.5C16 15.67 16.67 15 17.5 15C18.33 15 19 15.67 19 16.5C19 17.33 18.33 18 17.5 18ZM6.27 9.17996L5 13H19L17.73 9.17996C17.59 8.77996 17.21 8.49996 16.78 8.49996H7.22C6.79 8.49996 6.41 8.77996 6.27 9.17996Z" fill="currentColor"/></svg>';

const RuxIconLocalCarWash = class {
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

exports.rux_icon_local_car_wash = RuxIconLocalCarWash;
