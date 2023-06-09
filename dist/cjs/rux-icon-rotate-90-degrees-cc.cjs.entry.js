'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 4.00003C15.3 4.00003 17.61 4.88003 19.36 6.64003C22.88 10.15 22.88 15.85 19.36 19.36C17.61 21.12 15.3 22 13 22C11.99 22 10.99 21.83 10.03 21.49C9.35001 21.26 9.19001 20.37 9.69001 19.87C9.96001 19.6 10.35 19.49 10.71 19.61C11.45 19.87 12.22 20 13 20C15.02 20 17.03 19.14 18.45 17.4C20.5 14.88 20.5 11.13 18.45 8.61003C17.03 6.86003 15.02 6.00003 13 6.00003V6.83003C13 7.72003 11.92 8.16003 11.3 7.53003L9.47001 5.70003C9.08001 5.31003 9.08001 4.68003 9.47001 4.29003L11.29 2.46003C11.92 1.83003 13 2.28003 13 3.17003V4.00003ZM5.93001 7.83003L2.28001 11.49C1.50001 12.27 1.50001 13.54 2.28001 14.32L5.94001 17.98C6.72001 18.76 7.99001 18.76 8.77001 17.98L12.43 14.33C13.21 13.55 13.21 12.28 12.43 11.5L8.76001 7.82003C7.97001 7.04003 6.71001 7.04003 5.93001 7.83003ZM4.40001 12.19L6.65001 9.94003C7.04001 9.55003 7.67001 9.55003 8.07001 9.94003L10.31 12.18C10.7 12.57 10.7 13.2 10.31 13.59L8.06001 15.84C7.67001 16.23 7.04001 16.23 6.64001 15.84L4.40001 13.61C4.01001 13.22 4.01001 12.58 4.40001 12.19Z" fill="currentColor"/></svg>';

const RuxIconRotate90DegreesCc = class {
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

exports.rux_icon_rotate_90_degrees_cc = RuxIconRotate90DegreesCc;
