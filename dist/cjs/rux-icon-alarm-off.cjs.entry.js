'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.91 6.55998C20.33 6.90998 20.94 6.84998 21.29 6.43998L21.32 6.40998C21.67 5.98998 21.61 5.37998 21.2 5.02998L18.1 2.43998C17.68 2.08998 17.07 2.14998 16.72 2.55998L16.69 2.58998C16.34 3.00998 16.4 3.61998 16.81 3.96998L19.91 6.55998ZM3.71001 2.78998C3.33001 2.40998 2.71001 2.40998 2.32001 2.78998L2.30001 2.81998C1.91001 3.20998 1.91001 3.82998 2.30001 4.20998L2.98001 4.88998L2.81001 5.02998C2.39001 5.36998 2.34001 5.98998 2.68001 6.40998L2.71001 6.43998C3.06001 6.85998 3.67001 6.90998 4.09001 6.55998L4.40001 6.30998L5.20001 7.10998C3.83001 8.68998 3.00001 10.75 3.00001 13C3.00001 17.97 7.03001 22 12 22C14.25 22 16.31 21.17 17.89 19.8L19.3 21.21C19.68 21.59 20.3 21.59 20.69 21.21L20.72 21.18C21.1 20.8 21.1 20.18 20.72 19.79L3.71001 2.78998ZM10.04 6.28998C10.66 6.10998 11.32 5.99998 12 5.99998C15.86 5.99998 19 9.13998 19 13C19 13.68 18.89 14.34 18.71 14.96L20.27 16.52C20.74 15.44 21 14.25 21 13C21 8.02998 16.97 3.99998 12 3.99998C10.75 3.99998 9.56001 4.25998 8.47001 4.71998L10.04 6.28998ZM5.00001 13C5.00001 16.86 8.14001 20 12 20C13.7 20 15.26 19.39 16.47 18.38L6.62001 8.52998C5.61001 9.73998 5.00001 11.3 5.00001 13ZM7.32001 2.58998C7.58001 2.90998 7.61001 3.33998 7.43001 3.67998L6.09001 2.33998C6.49001 2.12998 6.99001 2.19998 7.29001 2.55998L7.32001 2.58998Z" fill="currentColor"/></svg>';

const RuxIconAlarmOff = class {
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

exports.rux_icon_alarm_off = RuxIconAlarmOff;
