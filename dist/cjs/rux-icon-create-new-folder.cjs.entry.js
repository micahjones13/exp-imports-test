'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6H20C21.1 6 22 6.9 22 8V18C22 19.1 21.1 20 20 20H4C2.89 20 2 19.11 2 18L2.01 6C2.01 4.89 2.89 4 4 4H9.17C9.7 4 10.21 4.21 10.59 4.59L12 6ZM16 14H18C18.55 14 19 13.55 19 13C19 12.45 18.55 12 18 12H16V10C16 9.45 15.55 9 15 9C14.45 9 14 9.45 14 10V12H12C11.45 12 11 12.45 11 13C11 13.55 11.45 14 12 14H14V16C14 16.55 14.45 17 15 17C15.55 17 16 16.55 16 16V14Z" fill="currentColor"/></svg>';

const RuxIconCreateNewFolder = class {
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

exports.rux_icon_create_new_folder = RuxIconCreateNewFolder;
