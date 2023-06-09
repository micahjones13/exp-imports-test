'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.97 1.96994C6.54 1.53994 5.85 1.57994 5.47 2.03994C3.93 3.93994 3 6.35995 3 8.99995C3 11.6399 3.93 14.0599 5.47 15.9499C5.85 16.4099 6.54 16.4499 6.96 16.0299C7.32 15.6699 7.35 15.0999 7.03 14.7099C5.77 13.1599 5 11.1699 5 8.99995C5 6.82995 5.77 4.83994 7.04 3.29994C7.37 2.89995 7.33 2.32995 6.97 1.96994ZM17 19.9999C16.71 19.9999 16.44 19.9399 16.24 19.8499C15.53 19.4799 15.03 18.9699 14.53 17.4699C14.0247 15.9242 13.0775 15.1934 12.1652 14.4894L12.14 14.4699L12.13 14.4622C11.3431 13.8546 10.527 13.2245 9.82 11.9399C9.29 10.9799 9 9.92994 9 8.99995C9 6.19994 11.2 3.99994 14 3.99994C16.56 3.99994 18.63 5.84995 18.95 8.30995C19.01 8.70994 19.36 8.99995 19.77 8.99995H20.11C20.61 8.99995 21 8.55995 20.94 8.05995C20.49 4.58994 17.61 1.99994 14 1.99994C10.07 1.99994 7 5.06994 7 8.99995C7 10.2599 7.38 11.6499 8.07 12.8999C8.98 14.5499 10.05 15.3799 10.92 16.0499C11.73 16.6699 12.31 17.1199 12.63 18.0999C13.23 19.9199 14 20.9399 15.36 21.6499C15.87 21.8799 16.43 21.9999 17 21.9999C18.84 21.9999 20.39 20.7599 20.86 19.0699C21 18.5299 20.61 17.9999 20.05 17.9999H19.7C19.32 17.9999 19.02 18.2699 18.89 18.6299C18.63 19.4199 17.88 19.9999 17 19.9999ZM14 11.4999C12.62 11.4999 11.5 10.3799 11.5 8.99995C11.5 7.61995 12.62 6.49995 14 6.49995C15.38 6.49995 16.5 7.61995 16.5 8.99995C16.5 10.3799 15.38 11.4999 14 11.4999Z" fill="currentColor"/></svg>';

const RuxIconHearing = class {
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

exports.rux_icon_hearing = RuxIconHearing;
