'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.93 4.2602L19.08 19.2502C19.42 20.0802 18.57 20.9102 17.75 20.5402L12.41 18.1802C12.15 18.0702 11.86 18.0702 11.6 18.1802L6.26002 20.5402C5.44002 20.9002 4.59002 20.0802 4.93002 19.2502L11.08 4.2602C11.41 3.4302 12.59 3.4302 12.93 4.2602Z" fill="currentColor"/></svg>';

const RuxIconNavigation = class {
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

exports.rux_icon_navigation = RuxIconNavigation;
