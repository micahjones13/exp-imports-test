'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 8.00002V6.41002C12 5.52002 13.08 5.07002 13.71 5.70002L19.3 11.29C19.69 11.68 19.69 12.31 19.3 12.7L13.71 18.29C13.08 18.92 12 18.48 12 17.59V16H5C4.45 16 4 15.55 4 15V9.00002C4 8.45002 4.45 8.00002 5 8.00002H12Z" fill="currentColor"/></svg>';

const RuxIconForward = class {
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

exports.rux_icon_forward = RuxIconForward;
