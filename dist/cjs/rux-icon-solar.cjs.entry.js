'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.5385 4C20.3456 4 21 4.67008 21 5.49666V17.5033C21 18.3299 20.3456 19 19.5385 19H3.46154C2.65436 19 2 18.3299 2 17.5033V5.49666C2 4.67008 2.65436 4 3.46154 4H19.5385ZM7 6H4V11H7V6ZM11 6H8V11H11V6ZM15 6H12V11H15V6ZM19 6H16V11H19V6ZM7 12H4V17H7V12ZM11 12H8V17H11V12ZM15 12H12V17H15V12ZM19 12H16V17H19V12Z" fill="currentColor"/></svg>';

const RuxIconSolar = class {
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

exports.rux_icon_solar = RuxIconSolar;
