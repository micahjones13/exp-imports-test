'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.29 2.70002C19.92 2.07002 21 2.52002 21 3.41002V17.61L12.69 9.30002L19.29 2.70002ZM5.61999 5.06002L21.44 20.88C21.83 21.27 21.83 21.9 21.43 22.29C21.04 22.68 20.41 22.68 20.02 22.29L18.73 21H3.40999C2.51999 21 2.07999 19.92 2.70999 19.29L9.86999 12.13L4.20999 6.47002C3.81999 6.08002 3.81999 5.45002 4.20999 5.06002C4.59999 4.67002 5.22999 4.67002 5.61999 5.06002Z" fill="currentColor"/></svg>';

const RuxIconSignalCellularOff = class {
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

exports.rux_icon_signal_cellular_off = RuxIconSignalCellularOff;
