'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.47 4.70021C14.86 4.31021 15.49 4.31021 15.88 4.70021C16.27 5.09021 16.27 5.73021 15.87 6.12021L12.7 9.29022C12.31 9.68021 11.68 9.68021 11.29 9.29022L8.12001 6.12021C7.73001 5.73021 7.73001 5.09021 8.12001 4.70021C8.51001 4.31021 9.14001 4.31021 9.53001 4.70021L12 7.17021L14.47 4.70021ZM9.53001 19.3002C9.14001 19.6902 8.51001 19.6902 8.12001 19.3002C7.73001 18.9102 7.73001 18.2702 8.13001 17.8902L11.3 14.7202C11.69 14.3302 12.32 14.3302 12.71 14.7202L15.88 17.8902C16.27 18.2802 16.27 18.9102 15.88 19.3002C15.49 19.6902 14.86 19.6902 14.47 19.3002L12 16.8302L9.53001 19.3002Z" fill="currentColor"/></svg>';

const RuxIconUnfoldLess = class {
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

exports.rux_icon_unfold_less = RuxIconUnfoldLess;
