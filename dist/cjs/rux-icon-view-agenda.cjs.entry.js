'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 3H20C20.55 3 21 3.45 21 4V10C21 10.55 20.55 11 20 11H3C2.45 11 2 10.55 2 10V4C2 3.45 2.45 3 3 3ZM3 13H20C20.55 13 21 13.45 21 14V20C21 20.55 20.55 21 20 21H3C2.45 21 2 20.55 2 20V14C2 13.45 2.45 13 3 13Z" fill="currentColor"/></svg>';

const RuxIconViewAgenda = class {
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

exports.rux_icon_view_agenda = RuxIconViewAgenda;
