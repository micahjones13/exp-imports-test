'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.73004 21H21.26C22.03 21 22.51 20.17 22.13 19.5L12.86 3.5C12.47 2.83 11.51 2.83 11.13 3.5L1.86004 19.5C1.48004 20.17 1.96004 21 2.73004 21ZM13 18H11V16H13V18ZM11 13C11 13.55 11.45 14 12 14C12.55 14 13 13.55 13 13V11C13 10.45 12.55 10 12 10C11.45 10 11 10.45 11 11V13Z" fill="currentColor"/></svg>';

const RuxIconReportProblem = class {
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

exports.rux_icon_report_problem = RuxIconReportProblem;
