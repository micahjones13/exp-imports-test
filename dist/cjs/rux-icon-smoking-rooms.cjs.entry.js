'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.85 7.72985C19.47 7.11985 19.85 6.27985 19.85 5.34985C19.85 3.83985 18.85 2.55985 17.47 2.13985C16.99 1.99985 16.5 2.35985 16.5 2.85985C16.5 3.18985 16.71 3.47985 17.02 3.56985C17.79 3.79985 18.35 4.50985 18.35 5.34985C18.35 6.16985 17.82 6.85985 17.08 7.10985C16.75 7.21985 16.5 7.49985 16.5 7.84985V7.99985C16.5 8.36985 16.77 8.68985 17.14 8.74985C19.07 9.05985 20.5 10.7498 20.5 12.7698V14.2498C20.5 14.6598 20.84 14.9998 21.25 14.9998C21.66 14.9998 22 14.6598 22 14.2498V12.7598C22 10.5398 20.72 8.61985 18.85 7.72985ZM15.5 15.9998H3.5C2.67 15.9998 2 16.6698 2 17.4998C2 18.3298 2.67 18.9998 3.5 18.9998H15.5C16.33 18.9998 17 18.3298 17 17.4998C17 16.6698 16.33 15.9998 15.5 15.9998ZM14.73 10.1998H16.03C17.9 10.1998 19.5 11.5498 19.51 13.3598V14.2498C19.51 14.6698 19.17 14.9998 18.76 14.9998H18.75C18.33 14.9998 18 14.6598 18 14.2498V13.6998C18 12.3898 17.08 11.6498 16.03 11.6498H14.61C12.77 11.6498 11.18 10.1998 11.15 8.35985C11.12 6.80985 12.15 5.48985 13.57 5.07985C14.04 4.93985 14.5 5.30985 14.5 5.79985C14.5 6.13985 14.28 6.42985 13.96 6.51985C13.12 6.74985 12.54 7.49985 12.66 8.44985C12.79 9.46985 13.71 10.1998 14.73 10.1998ZM19.5 15.9998V18.9998H18V15.9998H19.5ZM22 18.9998V15.9998H20.5V18.9998H22Z" fill="currentColor"/></svg>';

const RuxIconSmokingRooms = class {
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

exports.rux_icon_smoking_rooms = RuxIconSmokingRooms;
