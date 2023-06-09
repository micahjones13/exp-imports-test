'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 18.0001H8C6.9 18.0001 6 17.1001 6 16.0001V9.50008C6 8.67008 6.67 8.00008 7.5 8.00008C8.33 8.00008 9 8.67008 9 9.50008V12.7701L14.95 7.00008C15.52 6.45008 16.43 6.46008 16.99 7.02008C17.55 7.58008 17.55 8.49008 17 9.06008L11.15 15.0001H14.5C15.33 15.0001 16 15.6701 16 16.5001C16 17.3301 15.33 18.0001 14.5 18.0001Z" fill="currentColor"/></svg>';

const RuxIconTransitEnterexit = class {
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

exports.rux_icon_transit_enterexit = RuxIconTransitEnterexit;
