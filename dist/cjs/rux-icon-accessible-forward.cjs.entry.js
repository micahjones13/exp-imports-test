'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 6.53999C16.8954 6.53999 16 5.64456 16 4.53999C16 3.43542 16.8954 2.53999 18 2.53999C19.1046 2.53999 20 3.43542 20 4.53999C20 5.64456 19.1046 6.53999 18 6.53999ZM15 17C15 19.76 12.76 22 10 22C7.24 22 5 19.76 5 17C5 14.24 7.24 12 10 12V14C8.35 14 7 15.35 7 17C7 18.65 8.35 20 10 20C11.65 20 13 18.65 13 17H15ZM20 15.5C20 14.4 19.1 13.5 18 13.5H16.14L17.81 9.82999C18.42 8.49999 17.44 6.99999 15.96 6.99999H10.76C9.95 6.99999 9.22 7.46999 8.89 8.19999L8.61 8.95999C8.4 9.51999 8.72 10.13 9.29 10.29C9.78 10.43 10.29 10.18 10.49 9.70999L10.79 8.99999H13L11.17 13.1C10.57 14.43 11.56 16 13.02 16H18V20C18 20.55 18.45 21 19 21C19.55 21 20 20.55 20 20V15.5Z" fill="currentColor"/></svg>';

const RuxIconAccessibleForward = class {
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

exports.rux_icon_accessible_forward = RuxIconAccessibleForward;
