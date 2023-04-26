'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 5V16.11L7.94999 5.06L10.01 3H17C18.1 3 19 3.9 19 5ZM3.08999 5.85C2.69999 5.46 2.69999 4.83 3.08999 4.44C3.47999 4.05 4.10999 4.05 4.49999 4.44L20.55 20.5C20.94 20.89 20.94 21.52 20.55 21.91C20.16 22.3 19.53 22.3 19.14 21.91L17.97 20.74C17.68 20.9 17.35 21 17 21H6.99999C5.89999 21 4.99999 20.1 4.99999 19V8.01L5.11999 7.88L3.08999 5.85Z" fill="currentColor"/></svg>';

const RuxIconNoSim = class {
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

exports.rux_icon_no_sim = RuxIconNoSim;
