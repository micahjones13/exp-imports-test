'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 2C12.433 2 14 3.567 14 5.5L14.0005 12.2576C15.2217 13.2664 16 14.7923 16 16.5C16 19.5376 13.5376 22 10.5 22C7.46243 22 5 19.5376 5 16.5C5 14.7919 5.77868 13.2656 7.00044 12.2568L7 5.5C7 3.567 8.567 2 10.5 2ZM10.5 4C9.7203 4 9.07955 4.59489 9.00687 5.35543L9 5.49987L9.0005 13.199L8.27384 13.799C7.47135 14.4616 7 15.4402 7 16.5C7 18.433 8.567 20 10.5 20C12.433 20 14 18.433 14 16.5C14 15.5111 13.5896 14.593 12.8828 13.9362L12.7268 13.7995L12.0006 13.1997L12 5.5C12 4.7203 11.4051 4.07955 10.6445 4.00687L10.5 4ZM11 5.5C11 5.22386 10.7761 5 10.5 5C10.2239 5 10 5.22386 10 5.5L10.0006 14.0499C8.85917 14.2813 8 15.2903 8 16.5C8 17.8807 9.11929 19 10.5 19C11.8807 19 13 17.8807 13 16.5C13 15.2907 12.1413 14.2819 11.0004 14.0501L11 5.5ZM20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H17C16.4477 13 16 12.5523 16 12C16 11.4477 16.4477 11 17 11H20ZM19 9C19 8.44772 18.5523 8 18 8H17C16.4477 8 16 8.44772 16 9C16 9.55228 16.4477 10 17 10H18C18.5523 10 19 9.55228 19 9ZM20 5C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H17C16.4477 7 16 6.55228 16 6C16 5.44772 16.4477 5 17 5H20ZM19 3C19 2.44772 18.5523 2 18 2H17C16.4477 2 16 2.44772 16 3C16 3.55228 16.4477 4 17 4H18C18.5523 4 19 3.55228 19 3Z" fill="currentColor"/></svg>';

const RuxIconThermal = class {
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

exports.rux_icon_thermal = RuxIconThermal;
