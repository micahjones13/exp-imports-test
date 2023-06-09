'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.19997 17.78L9.49997 12.48L12.75 15.73C13.16 16.14 13.82 16.12 14.2 15.69L21.37 7.62003C21.72 7.23003 21.7 6.63003 21.33 6.25003C20.93 5.85003 20.26 5.86003 19.88 6.29003L13.49 13.47L10.2 10.18C9.80997 9.79003 9.17997 9.79003 8.78997 10.18L2.69997 16.28C2.30997 16.67 2.30997 17.3 2.69997 17.69L2.78997 17.78C3.17997 18.17 3.81997 18.17 4.19997 17.78Z" fill="currentColor"/></svg>';

const RuxIconShowChart = class {
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

exports.rux_icon_show_chart = RuxIconShowChart;
