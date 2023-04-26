'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.43001 6.1C4.93001 6.52 4.19001 6.5 3.72001 6.04C3.21001 5.54 3.21001 4.7 3.74001 4.22C4.40001 3.63 5.35001 3 6.44001 3C7.31001 3 8.95001 3.69 8.95001 5.86C8.95001 7.22 8.43002 8 7.65001 9.14C7.20002 9.8 6.15001 11.57 5.80001 12.66C5.44001 13.75 5.71001 14.58 6.16001 14.58C6.57222 14.58 6.98443 14.0838 7.23807 13.7784C7.24902 13.7652 7.25967 13.7524 7.27001 13.74C7.50001 13.5 8.98001 11.75 9.56001 11.02C10.32 10.09 12.25 8.18 14.5 8.18C17.44 8.18 18.38 10.73 18.53 12.38H19.75C20.44 12.38 21 12.94 21 13.63C21 14.32 20.44 14.88 19.75 14.88H18.54C18.14 19.65 15.48 20.98 13.85 20.98C12.08 20.98 10.64 19.59 10.64 17.89C10.64 16.19 12.24 13.16 16.02 12.52C16.0129 12.4697 16.0062 12.4184 15.9994 12.3665C15.9007 11.6139 15.7849 10.73 14.26 10.73C13.01 10.73 11.39 12.68 10.18 14.17L10.1673 14.1856C9.06331 15.5483 8.18594 16.6312 7.12001 16.94C6.22001 17.21 5.23001 17.04 4.48001 16.48C3.62001 15.84 3.14001 14.78 3.14001 13.5C3.14001 11.3926 5.1193 8.48891 5.79572 7.49658C5.89606 7.34939 5.96772 7.24425 6.00001 7.19C6.30001 6.7 6.80001 5.87 6.30001 5.67C6.12001 5.59 5.80001 5.78 5.43001 6.1ZM13.14 17.83C13.14 18.29 13.57 18.55 13.88 18.55C14.58 18.55 15.71 17.76 16.01 15.07C13.87 15.63 13.14 17.23 13.14 17.83Z" fill="currentColor"/></svg>';

const RuxIconGesture = class {
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

exports.rux_icon_gesture = RuxIconGesture;
