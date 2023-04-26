'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.37999 21.0098C7.86999 21.4998 8.65999 21.4998 9.14999 21.0098L17.46 12.6998C17.85 12.3098 17.85 11.6798 17.46 11.2898L9.14999 2.9798C8.65999 2.4898 7.86999 2.4898 7.37999 2.9798C6.88999 3.4698 6.88999 4.2598 7.37999 4.7498L14.62 11.9998L7.36999 19.2498C6.88999 19.7298 6.88999 20.5298 7.37999 21.0098Z" fill="currentColor"/></svg>';

const RuxIconArrowForwardIos = class {
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

exports.rux_icon_arrow_forward_ios = RuxIconArrowForwardIos;