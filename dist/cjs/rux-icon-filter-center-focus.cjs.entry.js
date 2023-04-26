'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 3C8.55 3 9 3.45 9 4C9 4.51071 8.61199 4.9352 8.1162 4.99324L8 5H6C5.48929 5 5.0648 5.38801 5.00676 5.8838L5 6V8C5 8.55 4.55 9 4 9C3.48929 9 3.0648 8.61199 3.00676 8.1162L3 8V5C3 3.95 3.82004 3.08223 4.85131 3.00551L5 3H8ZM15 12C15 10.34 13.66 9 12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12ZM4 15C4.51071 15 4.9352 15.388 4.99324 15.8838L5 16V18C5 18.5107 5.38801 18.9352 5.8838 18.9932L6 19H8C8.55 19 9 19.45 9 20C9 20.5107 8.61199 20.9352 8.1162 20.9932L8 21H5C3.95 21 3.08223 20.18 3.00551 19.1487L3 19V16C3 15.45 3.45 15 4 15ZM20 15C20.5107 15 20.9352 15.388 20.9932 15.8838L21 16V19C21 20.05 20.18 20.9178 19.1487 20.9945L19 21H16C15.45 21 15 20.55 15 20C15 19.4893 15.388 19.0648 15.8838 19.0068L16 19H18C18.5107 19 18.9352 18.612 18.9932 18.1162L19 18V16C19 15.45 19.45 15 20 15ZM20.9945 4.85131C20.9178 3.82004 20.05 3 19 3H16L15.8838 3.00676C15.388 3.0648 15 3.48929 15 4C15 4.55 15.45 5 16 5H18L18.1162 5.00676C18.612 5.0648 19 5.48929 19 6V8L19.0068 8.1162C19.0648 8.61199 19.4893 9 20 9C20.55 9 21 8.55 21 8V5L20.9945 4.85131Z" fill="currentColor"/></svg>';

const RuxIconFilterCenterFocus = class {
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

exports.rux_icon_filter_center_focus = RuxIconFilterCenterFocus;
