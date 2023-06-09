'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 0H7C5.9 0 5 0.9 5 2V16C5 17.1 5.9 18 7 18H17C18.1 18 19 17.1 19 16V2C19 0.9 18.1 0 17 0ZM10 19.21C10 18.76 10.54 18.54 10.85 18.85L12.64 20.64C12.84 20.84 12.84 21.15 12.64 21.35L10.85 23.14C10.54 23.46 10 23.24 10 22.79V22H6C5.45 22 5 21.55 5 21C5 20.45 5.45 20 6 20H10V19.21ZM15 20H18C18.55 20 19 20.45 19 21C19 21.55 18.55 22 18 22H15C14.45 22 14 21.55 14 21C14 20.45 14.45 20 15 20ZM10 4C10 5.1 10.89 6 12 6C13.1 6 14 5.1 13.99 4C13.99 2.9 13.09 2 11.99 2C10.89 2 10 2.9 10 4Z" fill="currentColor"/></svg>';

const RuxIconCameraRear = class {
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

exports.rux_icon_camera_rear = RuxIconCameraRear;
