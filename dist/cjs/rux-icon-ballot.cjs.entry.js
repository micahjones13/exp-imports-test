'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21ZM14 9.5H17C17.55 9.5 18 9.05 18 8.5C18 7.95 17.55 7.5 17 7.5H14C13.45 7.5 13 7.95 13 8.5C13 9.05 13.45 9.5 14 9.5ZM14 16.5H17C17.55 16.5 18 16.05 18 15.5C18 14.95 17.55 14.5 17 14.5H14C13.45 14.5 13 14.95 13 15.5C13 16.05 13.45 16.5 14 16.5ZM7 11H10C10.55 11 11 10.55 11 10V7C11 6.45 10.55 6 10 6H7C6.45 6 6 6.45 6 7V10C6 10.55 6.45 11 7 11ZM10 7H7V10H10V7ZM7 18H10C10.55 18 11 17.55 11 17V14C11 13.45 10.55 13 10 13H7C6.45 13 6 13.45 6 14V17C6 17.55 6.45 18 7 18ZM10 14H7V17H10V14Z" fill="currentColor"/></svg>';

const RuxIconBallot = class {
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

exports.rux_icon_ballot = RuxIconBallot;
