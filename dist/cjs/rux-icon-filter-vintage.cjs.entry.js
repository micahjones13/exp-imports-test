'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.84 12.0001C18.13 12.1101 18.42 12.2401 18.7 12.4001C20.62 13.5101 21.69 15.5201 21.7 17.5901C19.9 18.6201 17.62 18.7001 15.7 17.5901C15.42 17.4301 15.16 17.2501 14.92 17.0501C14.97 17.3601 15 17.6801 15 18.0001C15 20.2201 13.79 22.1501 12 23.1901C10.21 22.1501 8.99999 20.2201 8.99999 18.0001C8.99999 17.6801 9.02999 17.3601 9.07999 17.0401C8.83999 17.2301 8.57999 17.4201 8.29999 17.5801C6.36999 18.6901 4.08999 18.6101 2.29999 17.5801C2.30999 15.5101 3.37999 13.5001 5.29999 12.3901C5.57999 12.2301 5.86999 12.1001 6.15999 11.9901C5.86999 11.8801 5.57999 11.7501 5.29999 11.5901C3.36999 10.4801 2.29999 8.47006 2.29999 6.40006C4.09999 5.37006 6.37999 5.29006 8.29999 6.40006C8.57999 6.56006 8.83999 6.75006 9.07999 6.95006C9.02999 6.64006 8.99999 6.32006 8.99999 6.00006C8.99999 3.78006 10.21 1.85006 12 0.810059C13.79 1.85006 15 3.78006 15 6.00006C15 6.32006 14.97 6.64006 14.92 6.95006C15.16 6.76006 15.42 6.57006 15.7 6.41006C17.63 5.30006 19.91 5.38006 21.7 6.41006C21.69 8.48006 20.62 10.4901 18.7 11.6001C18.42 11.7601 18.13 11.8901 17.84 12.0001ZM7.99999 12.0001C7.99999 14.2101 9.78999 16.0001 12 16.0001C14.21 16.0001 16 14.2101 16 12.0001C16 9.79006 14.21 8.00006 12 8.00006C9.78999 8.00006 7.99999 9.79006 7.99999 12.0001Z" fill="currentColor"/></svg>';

const RuxIconFilterVintage = class {
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

exports.rux_icon_filter_vintage = RuxIconFilterVintage;
