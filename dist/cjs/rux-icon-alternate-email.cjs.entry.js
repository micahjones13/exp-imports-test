'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.03001 12.7199C1.60001 6.62995 6.63001 1.59995 12.72 2.02995C18.01 2.38995 22 7.00995 22 12.3199V13.4099C22 14.8499 21.18 16.2199 19.84 16.7499C18.21 17.3999 16.43 16.7599 15.54 15.5399C14.39 16.7099 12.64 17.2999 10.8 16.8699C8.91001 16.4199 7.42001 14.8399 7.08001 12.9299C6.47001 9.50995 9.34001 6.56995 12.74 7.05995C15.22 7.40995 17 9.66995 17 12.1799V13.4299C17 14.2199 17.71 14.9999 18.5 14.9999C19.29 14.9999 20 14.2199 20 13.4299V12.3299C20 8.59995 17.58 5.17995 13.96 4.25995C8.16001 2.75995 2.76001 8.16995 4.25001 13.9699C5.18001 17.5799 8.60001 19.9999 12.33 19.9999H16C16.55 19.9999 17 20.4499 17 20.9999C17 21.5499 16.55 21.9999 16 21.9999H12.31C7.01001 21.9999 2.39001 18.0099 2.03001 12.7199ZM9.00001 11.9999C9.00001 13.6599 10.34 14.9999 12 14.9999C13.66 14.9999 15 13.6599 15 11.9999C15 10.3399 13.66 8.99995 12 8.99995C10.34 8.99995 9.00001 10.3399 9.00001 11.9999Z" fill="currentColor"/></svg>';

const RuxIconAlternateEmail = class {
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

exports.rux_icon_alternate_email = RuxIconAlternateEmail;
