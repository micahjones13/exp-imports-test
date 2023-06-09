'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.11995 3.56008C3.72995 3.17008 3.09995 3.17008 2.70995 3.56008C2.31995 3.95008 2.31995 4.58008 2.70995 4.97008L5.10995 7.37008C3.16995 8.17008 1.83995 10.1401 2.01995 12.4101C2.22995 15.0501 4.58995 17.0001 7.22995 17.0001H10.05C10.57 17.0001 11 16.5701 11 16.0501C11 15.5301 10.57 15.1001 10.05 15.1001H7.15995C5.52995 15.1001 4.05995 13.9101 3.90995 12.2801C3.75995 10.5601 5.01995 9.11008 6.65995 8.93008L8.75995 11.0301C8.32995 11.1201 7.99995 11.4901 7.99995 11.9501V12.0501C7.99995 12.5701 8.42995 13.0001 8.94995 13.0001H10.73L13 15.2701V17.0001H14.73L18.03 20.3001C18.42 20.6901 19.05 20.6901 19.44 20.3001C19.83 19.9101 19.83 19.2801 19.44 18.8901L4.11995 3.56008ZM21.9399 11.2301C21.57 8.76008 19.32 7.00008 16.82 7.00008H13.95C13.43 7.00008 13 7.43008 13 7.95008C13 8.47008 13.43 8.90008 13.95 8.90008H16.85C18.45 8.90008 19.8899 10.0401 20.07 11.6301C20.24 13.0601 19.43 14.3201 18.2199 14.8501L19.6199 16.2501C21.25 15.2301 22.26 13.3401 21.9399 11.2301ZM15.05 11.0001C15.57 11.0001 16 11.4301 16 11.9501V12.0501C16 12.2101 15.95 12.3601 15.88 12.4901L14.39 11.0001H15.05Z" fill="currentColor"/></svg>';

const RuxIconLinkOff = class {
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

exports.rux_icon_link_off = RuxIconLinkOff;
