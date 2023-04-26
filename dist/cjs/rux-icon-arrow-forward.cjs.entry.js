'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 13.0002H16.17L11.29 17.8802C10.9 18.2702 10.9 18.9102 11.29 19.3002C11.68 19.6902 12.31 19.6902 12.7 19.3002L19.29 12.7102C19.68 12.3202 19.68 11.6902 19.29 11.3002L12.71 4.70021C12.32 4.31021 11.69 4.31021 11.3 4.70021C10.91 5.09021 10.91 5.72021 11.3 6.11021L16.17 11.0002H5C4.45 11.0002 4 11.4502 4 12.0002C4 12.5502 4.45 13.0002 5 13.0002Z" fill="currentColor"/></svg>';

const RuxIconArrowForward = class {
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

exports.rux_icon_arrow_forward = RuxIconArrowForward;
