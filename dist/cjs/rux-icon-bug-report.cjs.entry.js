'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 7.99997H17.19C16.74 7.21997 16.12 6.54997 15.37 6.03997L16.3 5.10997C16.69 4.71997 16.69 4.08997 16.3 3.69997C15.91 3.30997 15.28 3.30997 14.89 3.69997L13.42 5.16997C12.96 5.05997 12.49 4.99997 12 4.99997C11.51 4.99997 11.04 5.05997 10.59 5.16997L9.11 3.69997C8.72 3.30997 8.09 3.30997 7.7 3.69997C7.31 4.08997 7.31 4.71997 7.7 5.10997L8.62 6.03997C7.88 6.54997 7.26 7.21997 6.81 7.99997H5C4.45 7.99997 4 8.44997 4 8.99997C4 9.54997 4.45 9.99997 5 9.99997H6.09C6.04 10.33 6 10.66 6 11V12H5C4.45 12 4 12.45 4 13C4 13.55 4.45 14 5 14H6V15C6 15.34 6.04 15.67 6.09 16H5C4.45 16 4 16.45 4 17C4 17.55 4.45 18 5 18H6.81C7.85 19.79 9.78 21 12 21C14.22 21 16.15 19.79 17.19 18H19C19.55 18 20 17.55 20 17C20 16.45 19.55 16 19 16H17.91C17.96 15.67 18 15.34 18 15V14H19C19.55 14 20 13.55 20 13C20 12.45 19.55 12 19 12H18V11C18 10.66 17.96 10.33 17.91 9.99997H19C19.55 9.99997 20 9.54997 20 8.99997C20 8.44997 19.55 7.99997 19 7.99997ZM11 16C10.45 16 10 15.55 10 15C10 14.45 10.45 14 11 14H13C13.55 14 14 14.45 14 15C14 15.55 13.55 16 13 16H11ZM11 12H13C13.55 12 14 11.55 14 11C14 10.45 13.55 9.99997 13 9.99997H11C10.45 9.99997 10 10.45 10 11C10 11.55 10.45 12 11 12Z" fill="currentColor"/></svg>';

const RuxIconBugReport = class {
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

exports.rux_icon_bug_report = RuxIconBugReport;
