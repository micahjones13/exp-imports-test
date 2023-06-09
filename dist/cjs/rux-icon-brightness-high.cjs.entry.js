'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 8.68989V5.99989C20 4.89989 19.1 3.99989 18 3.99989H15.31L13.41 2.09989C12.63 1.31989 11.36 1.31989 10.58 2.09989L8.69001 3.99989H6.00001C4.90001 3.99989 4.00001 4.89989 4.00001 5.99989V8.68989L2.10001 10.5899C1.32001 11.3699 1.32001 12.6399 2.10001 13.4199L4.00001 15.3199V17.9999C4.00001 19.0999 4.90001 19.9999 6.00001 19.9999H8.69001L10.59 21.8999C11.37 22.6799 12.64 22.6799 13.42 21.8999L15.32 19.9999H18C19.1 19.9999 20 19.0999 20 17.9999V15.3099L21.9 13.4099C22.68 12.6299 22.68 11.3599 21.9 10.5799L20 8.68989ZM12 17.9999C8.69001 17.9999 6.00001 15.3099 6.00001 11.9999C6.00001 8.68989 8.69001 5.99989 12 5.99989C15.31 5.99989 18 8.68989 18 11.9999C18 15.3099 15.31 17.9999 12 17.9999ZM8.00001 11.9999C8.00001 9.78989 9.79001 7.99989 12 7.99989C14.21 7.99989 16 9.78989 16 11.9999C16 14.2099 14.21 15.9999 12 15.9999C9.79001 15.9999 8.00001 14.2099 8.00001 11.9999Z" fill="currentColor"/></svg>';

const RuxIconBrightnessHigh = class {
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

exports.rux_icon_brightness_high = RuxIconBrightnessHigh;
