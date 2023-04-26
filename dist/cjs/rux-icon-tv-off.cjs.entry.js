'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 8.0002V17.8802L22.85 19.7302C22.95 19.5102 23 19.2602 23 19.0002V7.0002C23 5.8902 22.1 5.0002 21 5.0002H13.41L16.35 2.0602C16.55 1.8602 16.55 1.5502 16.35 1.3502C16.15 1.1502 15.84 1.1502 15.64 1.3502L12 4.9902L8.36 1.3502C8.16 1.1502 7.85 1.1502 7.65 1.3502C7.45 1.5502 7.45 1.8602 7.65 2.0602L10.59 5.0002H8.12L10.12 7.0002H20C20.55 7.0002 21 7.4502 21 8.0002ZM3.12 2.8302C2.73 2.4402 2.1 2.4402 1.71 2.8302C1.32 3.2202 1.32 3.8502 1.71 4.2402L2.53 5.0602C1.65 5.2802 1 6.0602 1 7.0002V19.0002C1 20.1002 1.9 21.0002 3 21.0002H18.46L19.75 22.2902C20.14 22.6802 20.77 22.6802 21.16 22.2902C21.52 21.9302 21.53 21.3702 21.23 20.9802H21.26L3.12 2.8302ZM3 8.0002V18.0002C3 18.5502 3.45 19.0002 4 19.0002H16.46L4.46 7.0002H4C3.45 7.0002 3 7.4502 3 8.0002Z" fill="currentColor"/></svg>';

const RuxIconTvOff = class {
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

exports.rux_icon_tv_off = RuxIconTvOff;
