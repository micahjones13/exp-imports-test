'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.32 5.67999C17.96 6.03999 17.93 6.59999 18.25 6.99999C19.7 8.81999 20.46 11.31 19.78 13.92C18.99 16.97 16.6 19.25 13.57 19.86C8.47002 20.87 4.00002 16.93 4.00002 12C4.00002 7.91999 7.05002 4.55999 11 4.06999V6.08999C7.87002 6.61999 5.57002 9.54999 6.07002 12.92C6.46002 15.53 8.63002 17.63 11.25 17.95C14.89 18.4 18 15.56 18 12C18 10.75 17.62 9.59999 16.97 8.63999C16.63 8.13999 15.9 8.10999 15.47 8.52999L15.46 8.53999C15.12 8.87999 15.09 9.40999 15.35 9.80999C15.95 10.73 16.19 11.91 15.84 13.13C15.45 14.5 14.3 15.59 12.9 15.9C10.3 16.47 8.00002 14.51 8.00002 12C8.00002 10.14 9.28002 8.58999 11 8.13999V10.28C10.4 10.63 10 11.26 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 11.26 13.6 10.62 13 10.28V2.70999C13 2.31999 12.68 1.99999 12.29 1.99999C6.93002 1.79999 2.31002 6.05999 2.02002 11.4C1.66002 17.95 7.43002 23.22 14.03 21.8C17.91 20.97 20.91 18 21.78 14.13C22.49 10.97 21.58 7.96999 19.81 5.75999C19.44 5.28999 18.74 5.25999 18.32 5.67999Z" fill="currentColor"/></svg>';

const RuxIconTrackChanges = class {
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

exports.rux_icon_track_changes = RuxIconTrackChanges;
