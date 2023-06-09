'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 5H13C13.55 5 14 5.45 14 6C14 6.55 13.55 7 13 7H3C2.45 7 2 6.55 2 6C2 5.45 2.45 5 3 5ZM3 9H13C13.55 9 14 9.45 14 10C14 10.55 13.55 11 13 11H3C2.45 11 2 10.55 2 10C2 9.45 2.45 9 3 9ZM3 15H9C9.55 15 10 14.55 10 14C10 13.45 9.55 13 9 13H3C2.45 13 2 13.45 2 14C2 14.55 2.45 15 3 15ZM16 7C16 5.9 16.9 5 18 5H20C20.55 5 21 5.45 21 6C21 6.55 20.55 7 20 7H18V16C18 17.84 16.36 19.28 14.46 18.95C13.25 18.74 12.26 17.75 12.05 16.54C11.72 14.64 13.16 13 15 13C15.35 13 15.69 13.07 16 13.18V7Z" fill="currentColor"/></svg>';

const RuxIconQueueMusic = class {
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

exports.rux_icon_queue_music = RuxIconQueueMusic;
