'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L17.17 20.39C17.55 20.62 18.02 20.28 17.92 19.85L16.55 13.97L21.11 10.02C21.44 9.73 21.27 9.18 20.82 9.14L14.81 8.63L12.46 3.09C12.29 2.68 11.71 2.68 11.54 3.09L9.18999 8.63L3.17999 9.14C2.73999 9.18 2.55999 9.73 2.89999 10.02L7.45999 13.97L6.08999 19.85C5.99 20.28 6.45999 20.62 6.83999 20.39L12 17.27Z" fill="currentColor"/></svg>';

const RuxIconGrade = class {
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

exports.rux_icon_grade = RuxIconGrade;
