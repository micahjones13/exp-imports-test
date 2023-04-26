'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 5H6C5.45 5 5 5.45 5 6C5 6.55 5.45 7 6 7H16C16.55 7 17 6.55 17 6C17 5.45 16.55 5 16 5ZM16 9H6C5.45 9 5 9.45 5 10C5 10.55 5.45 11 6 11H16C16.55 11 17 10.55 17 10C17 9.45 16.55 9 16 9ZM6 13H12C12.55 13 13 13.45 13 14C13 14.55 12.55 15 12 15H6C5.45 15 5 14.55 5 14C5 13.45 5.45 13 6 13ZM15 18.11V13.88C15 13.49 15.42 13.25 15.76 13.44L19.29 15.56C19.61 15.76 19.61 16.23 19.29 16.42L15.76 18.54C15.42 18.74 15 18.5 15 18.11Z" fill="currentColor"/></svg>';

const RuxIconPlaylistPlay = class {
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

exports.rux_icon_playlist_play = RuxIconPlaylistPlay;
