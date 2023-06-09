'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.7 2.70022L14.83 4.83022C15.23 5.23022 15.23 5.87022 14.83 6.25022L12.7 8.33022C12.07 8.95022 11 8.51022 11 7.62022V6.09022C8.16 6.57022 6 9.03022 6 12.0002C6 14.7302 7.82 17.0302 10.32 17.7502C10.73 17.8702 11 18.2602 11 18.6902V18.7202C11 19.3602 10.39 19.8602 9.77 19.6802C6.43 18.7102 4 15.6402 4 12.0002C4 7.92022 7.06 4.56022 11 4.07022V3.41022C11 2.52022 12.08 2.08022 12.7 2.70022ZM19.01 8.17022C19.29 8.68022 19.51 9.21022 19.67 9.76022C19.86 10.3802 19.36 11.0002 18.71 11.0002H18.69C18.26 11.0002 17.87 10.7202 17.75 10.3002C17.63 9.90022 17.47 9.51022 17.27 9.14022C17.06 8.76022 17.13 8.29022 17.44 7.98022L17.45 7.97022C17.91 7.51022 18.7 7.60022 19.01 8.17022ZM13 18.7002C13 19.3502 13.62 19.8402 14.24 19.6602C14.79 19.5002 15.32 19.2802 15.83 19.0002C16.4 18.6902 16.49 17.9002 16.03 17.4402L16.01 17.4202C15.7 17.1102 15.23 17.0402 14.85 17.2502C14.48 17.4602 14.09 17.6202 13.69 17.7402C13.28 17.8602 13 18.2502 13 18.6802V18.7002ZM19 15.8302C18.69 16.4002 17.9 16.4902 17.44 16.0302C17.14 15.7302 17.06 15.2502 17.27 14.8702C17.47 14.4902 17.63 14.1002 17.75 13.7002C17.87 13.2802 18.25 13.0002 18.69 13.0002H18.71C19.36 13.0002 19.85 13.6202 19.67 14.2402C19.5 14.7902 19.28 15.3202 19 15.8302Z" fill="currentColor"/></svg>';

const RuxIconRotateRight = class {
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

exports.rux_icon_rotate_right = RuxIconRotateRight;
