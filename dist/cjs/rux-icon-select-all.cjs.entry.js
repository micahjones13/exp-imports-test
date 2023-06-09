'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 5H3C3 3.9 3.9 3 5 3V5ZM5 13H3V11H5V13ZM9 21V19H7V21H9ZM5 9H3V7H5V9ZM13 3H11V5H13V3ZM19 5V3C20.1 3 21 3.9 21 5H19ZM5 21V19H3C3 20.1 3.9 21 5 21ZM5 17H3V15H5V17ZM9 3H7V5H9V3ZM13 21H11V19H13V21ZM19 13H21V11H19V13ZM21 19C21 20.1 20.1 21 19 21V19H21ZM19 9H21V7H19V9ZM21 17H19V15H21V17ZM17 21V19H15V21H17ZM17 5H15V3H17V5ZM8 17H16C16.55 17 17 16.55 17 16V8C17 7.45 16.55 7 16 7H8C7.45 7 7 7.45 7 8V16C7 16.55 7.45 17 8 17ZM15 9H9V15H15V9Z" fill="currentColor"/></svg>';

const RuxIconSelectAll = class {
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

exports.rux_icon_select_all = RuxIconSelectAll;
