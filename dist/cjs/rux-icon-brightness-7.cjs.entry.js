'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 8.68992V4.99992C20 4.44992 19.55 3.99992 19 3.99992H15.31L12.71 1.39992C12.32 1.00992 11.69 1.00992 11.3 1.39992L8.68998 3.99992H4.99998C4.44998 3.99992 3.99998 4.44992 3.99998 4.99992V8.68992L1.39998 11.2899C1.00998 11.6799 1.00998 12.3099 1.39998 12.6999L3.99998 15.2999V18.9999C3.99998 19.5499 4.44998 19.9999 4.99998 19.9999H8.68998L11.29 22.5999C11.68 22.9899 12.31 22.9899 12.7 22.5999L15.3 19.9999H19C19.55 19.9999 20 19.5499 20 18.9999V15.3099L22.6 12.7099C22.99 12.3199 22.99 11.6899 22.6 11.2999L20 8.68992ZM12 17.9999C8.68998 17.9999 5.99998 15.3099 5.99998 11.9999C5.99998 8.68992 8.68998 5.99992 12 5.99992C15.31 5.99992 18 8.68992 18 11.9999C18 15.3099 15.31 17.9999 12 17.9999ZM7.99998 11.9999C7.99998 9.78992 9.78998 7.99992 12 7.99992C14.21 7.99992 16 9.78992 16 11.9999C16 14.2099 14.21 15.9999 12 15.9999C9.78998 15.9999 7.99998 14.2099 7.99998 11.9999Z" fill="currentColor"/></svg>';

const RuxIconBrightness7 = class {
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

exports.rux_icon_brightness_7 = RuxIconBrightness7;
