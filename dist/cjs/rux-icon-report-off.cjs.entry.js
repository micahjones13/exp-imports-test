'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.41 1.58008L1 2.99008L4.64 6.63008L3.29 7.98008C3.11 8.16008 3 8.42008 3 8.68008V15.3101C3 15.5801 3.11 15.8301 3.29 16.0201L7.97 20.7001C8.16 20.8901 8.42 21.0001 8.68 21.0001H15.31C15.58 21.0001 15.83 20.8901 16.02 20.7101L17.37 19.3601L21.01 23.0001L22.42 21.5901L2.41 1.58008ZM12 7.00008C12.55 7.00008 13 7.45008 13 8.00008V9.33008L20.2 16.5301L20.71 16.0201C20.9 15.8301 21 15.5801 21 15.3101V8.68008C21 8.41008 20.89 8.16008 20.71 7.97008L16.03 3.29008C15.84 3.11008 15.58 3.00008 15.32 3.00008H8.68C8.42 3.00008 8.16 3.11008 7.98 3.29008L7.47 3.80008L11.16 7.49008C11.33 7.20008 11.64 7.00008 12 7.00008ZM10.7 16.0001C10.7 16.7201 11.28 17.3001 12 17.3001C12.72 17.3001 13.3 16.7201 13.3 16.0001C13.3 15.2801 12.72 14.7001 12 14.7001C11.28 14.7001 10.7 15.2801 10.7 16.0001Z" fill="currentColor"/></svg>';

const RuxIconReportOff = class {
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

exports.rux_icon_report_off = RuxIconReportOff;
