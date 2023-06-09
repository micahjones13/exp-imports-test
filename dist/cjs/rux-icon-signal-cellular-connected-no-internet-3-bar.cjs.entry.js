'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 4.41002L21.994 4.29648C21.9069 3.48293 20.8926 3.09741 20.29 3.70002L3.70999 20.29L3.63383 20.3746C3.1191 21.0119 3.55869 22 4.40999 22H18V11L18.0051 10.8234C18.0961 9.24601 19.3993 8.00002 21 8.00002H22V4.41002ZM22 22V20H20V22H22ZM21 10C21.5107 10 21.9352 10.388 21.9932 10.8838L22 11V17C22 17.55 21.55 18 21 18C20.4893 18 20.0648 17.612 20.0068 17.1162L20 17V11C20 10.45 20.45 10 21 10ZM17.9995 7.40501L20.9973 4.40691L21 4.41002V7.00002L20.8001 7.0049C19.6847 7.05957 18.6906 7.5692 17.9992 8.35256L17.9995 7.40501Z" fill="currentColor"/></svg>';

const RuxIconSignalCellularConnectedNoInternet3Bar = class {
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

exports.rux_icon_signal_cellular_connected_no_internet_3_bar = RuxIconSignalCellularConnectedNoInternet3Bar;
