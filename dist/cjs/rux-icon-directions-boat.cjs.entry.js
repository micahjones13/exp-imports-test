'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.95001 19H4.00001C5.42001 19 6.70001 18.3 7.66001 17.36C7.85001 17.18 8.16001 17.18 8.35001 17.36C9.30001 18.3 10.58 19 12 19C13.42 19 14.7 18.3 15.66 17.36C15.85 17.17 16.15 17.17 16.35 17.36C17.3 18.3 18.58 19 20 19H20.05L21.94 12.32C22.02 12.06 22 11.78 21.88 11.54C21.76 11.3 21.54 11.12 21.28 11.04L20 10.62V6C20 4.9 19.1 4 18 4H15V2C15 1.45 14.55 1 14 1H10C9.45001 1 9.00001 1.45 9.00001 2V4H6.00001C4.90001 4 4.00001 4.9 4.00001 6V10.62L2.71001 11.04C2.45001 11.12 2.23001 11.3 2.11001 11.54C1.99001 11.78 1.96001 12.06 2.05001 12.32L3.95001 19ZM20 21C18.71 21 17.42 20.59 16.26 19.86C16.1 19.76 15.89 19.76 15.73 19.86C13.42 21.33 10.57 21.33 8.26001 19.86C8.10001 19.76 7.89001 19.76 7.73001 19.86C6.58001 20.59 5.29001 21 4.00001 21H3.00001C2.45001 21 2.00001 21.45 2.00001 22C2.00001 22.55 2.45001 23 3.00001 23H4.00001C5.38001 23 6.74001 22.65 8.00001 22.01C10.52 23.3 13.48 23.3 16 22.01C17.26 22.66 18.62 23 20 23H21C21.55 23 22 22.55 22 22C22 21.45 21.55 21 21 21H20ZM17 6H7.00001C6.45001 6 6.00001 6.45 6.00001 7V9.97L11.37 8.2C11.78 8.07 12.21 8.07 12.62 8.2L18 9.97V7C18 6.45 17.55 6 17 6Z" fill="currentColor"/></svg>';

const RuxIconDirectionsBoat = class {
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

exports.rux_icon_directions_boat = RuxIconDirectionsBoat;
