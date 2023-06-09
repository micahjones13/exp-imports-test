'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.63383 20.3746C3.1191 21.0119 3.55869 22 4.40999 22H18V11L18.0051 10.8234C18.0961 9.24601 19.3993 8.00002 21 8.00002H22V4.41002L21.994 4.29648C21.9069 3.48293 20.8926 3.09741 20.29 3.70002L3.70999 20.29L3.63383 20.3746ZM20.9973 4.40691L13.9995 11.407V21L17 21V11C17 8.85477 18.681 7.10875 20.8001 7.0049L21 7.00002V4.41002L20.9973 4.40691ZM21.9932 10.8838C21.9352 10.388 21.5107 10 21 10C20.45 10 20 10.45 20 11V17L20.0068 17.1162C20.0648 17.612 20.4893 18 21 18C21.55 18 22 17.55 22 17V11L21.9932 10.8838ZM22 22V20H20V22H22Z" fill="currentColor"/></svg>';

const RuxIconSignalCellularConnectedNoInternet2Bar = class {
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

exports.rux_icon_signal_cellular_connected_no_internet_2_bar = RuxIconSignalCellularConnectedNoInternet2Bar;
