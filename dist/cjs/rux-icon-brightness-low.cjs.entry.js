'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.9 13.4099L20 15.3099V17.9999C20 19.0999 19.1 19.9999 18 19.9999H15.32L13.42 21.8999C12.64 22.6799 11.37 22.6799 10.59 21.8999L8.69001 19.9999H6.00001C4.90001 19.9999 4.00001 19.0999 4.00001 17.9999V15.3199L2.10001 13.4199C1.32001 12.6399 1.32001 11.3699 2.10001 10.5899L4.00001 8.68989V5.99989C4.00001 4.89989 4.90001 3.99989 6.00001 3.99989H8.69001L10.58 2.09989C11.36 1.31989 12.63 1.31989 13.41 2.09989L15.31 3.99989H18C19.1 3.99989 20 4.89989 20 5.99989V8.68989L21.9 10.5799C22.68 11.3599 22.68 12.6299 21.9 13.4099ZM6.00001 11.9999C6.00001 15.3099 8.69001 17.9999 12 17.9999C15.31 17.9999 18 15.3099 18 11.9999C18 8.68989 15.31 5.99989 12 5.99989C8.69001 5.99989 6.00001 8.68989 6.00001 11.9999Z" fill="currentColor"/></svg>';

const RuxIconBrightnessLow = class {
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

exports.rux_icon_brightness_low = RuxIconBrightnessLow;
