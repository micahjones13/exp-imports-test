'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 5.82998V11H19C20.1 11 21 11.9 21 13V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V8.99998C3 7.89998 3.9 6.99998 5 6.99998H9V5.82998C9 5.29998 9.21 4.78998 9.59 4.40998L11.29 2.70998C11.68 2.31998 12.31 2.31998 12.7 2.70998L14.41 4.41998C14.79 4.78998 15 5.29998 15 5.82998ZM5 19H7V17H5V19ZM7 15H5V13H7V15ZM5 11H7V8.99998H5V11ZM13 19H11V17H13V19ZM11 15H13V13H11V15ZM13 11H11V8.99998H13V11ZM11 6.99998H13V4.99998H11V6.99998ZM19 19H17V17H19V19ZM17 15H19V13H17V15Z" fill="currentColor"/></svg>';

const RuxIconLocationCity = class {
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

exports.rux_icon_location_city = RuxIconLocationCity;
