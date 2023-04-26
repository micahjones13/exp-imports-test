'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.22 6.86012C18.22 6.26012 16.16 6.82012 14.83 8.15012L12 10.6601L10.48 12.0001H10.49L7.8 14.3901C6.99 15.2001 5.85 15.5401 4.68 15.3101C3.43 15.0601 2.4 14.0601 2.11 12.8201C1.59 10.5901 3.27 8.62012 5.4 8.62012C6.31 8.62012 7.16 8.97012 7.84 9.65012L8.31 10.0601C8.69 10.4001 9.26 10.4001 9.64 10.0601C10.09 9.66012 10.09 8.96012 9.64 8.56012L9.22 8.20012C8.2 7.18012 6.84 6.62012 5.4 6.62012C2.42 6.62012 0 9.04012 0 12.0001C0 14.9601 2.42 17.3801 5.4 17.3801C6.84 17.3801 8.2 16.8201 9.17 15.8501L12 13.3501L12.01 13.3601L13.52 12.0001H13.51L16.2 9.61012C17.01 8.80012 18.15 8.46012 19.32 8.69012C20.57 8.94012 21.6 9.94012 21.89 11.1801C22.41 13.4101 20.73 15.3801 18.6 15.3801C17.7 15.3801 16.84 15.0301 16.16 14.3501L15.68 13.9301C15.3 13.5901 14.73 13.5901 14.35 13.9301C13.9 14.3301 13.9 15.0301 14.35 15.4301L14.77 15.8001C15.79 16.8101 17.14 17.3701 18.59 17.3701C21.86 17.3701 24.45 14.4701 23.92 11.1201C23.62 9.13012 22.15 7.43012 20.22 6.86012Z" fill="currentColor"/></svg>';

const RuxIconAllInclusive = class {
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

exports.rux_icon_all_inclusive = RuxIconAllInclusive;
