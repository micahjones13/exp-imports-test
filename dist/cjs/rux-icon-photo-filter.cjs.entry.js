'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.02 10.99V18C19.02 18.55 18.57 19 18.02 19H6.00002C5.45002 19 5.00002 18.55 5.00002 18V6C5.00002 5.45 5.45002 5 6.00002 5H13C13.55 5 14 4.55 14 4C14 3.45 13.55 3 13 3H5.02002C3.92002 3 3.02002 3.9 3.02002 5V19C3.02002 20.1 3.92002 21 5.02002 21H19C20.1 21 21 20.11 21 19V10.99C21 10.44 20.56 10 20.01 10C19.46 10 19.02 10.44 19.02 10.99ZM13.25 10.75L12.46 9C12.28 8.61 11.73 8.61 11.55 9L10.76 10.75L9.00002 11.54C8.61002 11.72 8.61002 12.27 9.00002 12.45L10.75 13.24L11.54 15C11.72 15.39 12.27 15.39 12.45 15L13.24 13.25L15 12.46C15.39 12.28 15.39 11.73 15 11.55L13.25 10.75ZM17.34 4.74L17.94 6.06L19.26 6.66C19.55 6.8 19.55 7.22 19.26 7.35L17.94 7.95L17.34 9.27C17.2 9.56 16.78 9.56 16.65 9.27L16.05 7.95L14.73 7.35C14.44 7.21 14.44 6.79 14.73 6.66L16.05 6.06L16.65 4.74C16.79 4.45 17.21 4.45 17.34 4.74Z" fill="currentColor"/></svg>';

const RuxIconPhotoFilter = class {
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

exports.rux_icon_photo_filter = RuxIconPhotoFilter;
