'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.75 3.93997L4.06999 10.08C3.23999 10.43 3.25999 11.61 4.08999 11.93L9.42999 14C9.68999 14.1 9.89999 14.31 9.99999 14.57L12.06 19.9C12.38 20.74 13.57 20.76 13.92 19.93L20.07 5.25997C20.4 4.42997 19.57 3.59997 18.75 3.93997Z" fill="currentColor"/></svg>';

const RuxIconNearMe = class {
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

exports.rux_icon_near_me = RuxIconNearMe;
