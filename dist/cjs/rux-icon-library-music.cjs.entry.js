'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM17 7H15V12.37C15 13.64 14.1 14.81 12.84 14.97C11.15 15.2 9.73 13.72 10.04 12.02C10.24 10.92 11.22 10.07 12.34 10C12.97 9.96 13.54 10.16 14 10.51V6C14 5.45 14.45 5 15 5H17C17.55 5 18 5.45 18 6C18 6.55 17.55 7 17 7ZM2 7C2 6.45 2.45 6 3 6C3.55 6 4 6.45 4 7V19C4 19.55 4.45 20 5 20H17C17.55 20 18 20.45 18 21C18 21.55 17.55 22 17 22H4C2.9 22 2 21.1 2 20V7Z" fill="currentColor"/></svg>';

const RuxIconLibraryMusic = class {
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

exports.rux_icon_library_music = RuxIconLibraryMusic;
