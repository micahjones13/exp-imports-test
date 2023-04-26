'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5V13.55C11.06 13.01 9.89997 12.8 8.66997 13.23C7.32997 13.71 6.29997 14.9 6.05997 16.3C5.59997 19.04 7.91997 21.38 10.65 20.95C12.61 20.64 14 18.84 14 16.85V7H16C17.1 7 18 6.1 18 5C18 3.9 17.1 3 16 3H14C12.9 3 12 3.9 12 5Z" fill="currentColor"/></svg>';

const RuxIconMusicNote = class {
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

exports.rux_icon_music_note = RuxIconMusicNote;
