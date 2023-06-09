'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.9901 9.78002L13.2301 15.04C12.5101 15.61 11.4901 15.61 10.7701 15.05L4.01005 9.79002C3.50005 9.39002 3.50005 8.61002 4.01005 8.21002L10.7701 2.94002C11.5001 2.38002 12.5101 2.38002 13.2301 2.94002L19.9901 8.20002C20.5001 8.60002 20.5001 9.38002 19.9901 9.78002ZM11.3701 18.06C11.7301 18.34 12.2401 18.34 12.6001 18.06L18.7501 13.27C19.1101 12.99 19.6101 12.99 19.9701 13.27L19.9801 13.28C20.4901 13.68 20.4901 14.45 19.9801 14.85L13.2201 20.11C12.4901 20.67 11.4801 20.67 10.7601 20.11L4.00005 14.85C3.49005 14.45 3.49005 13.68 4.00005 13.28C4.36005 13 4.86005 13 5.22005 13.28L11.3701 18.06Z" fill="currentColor"/></svg>';

const RuxIconLayers = class {
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

exports.rux_icon_layers = RuxIconLayers;
