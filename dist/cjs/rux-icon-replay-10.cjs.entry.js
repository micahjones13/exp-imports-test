'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.99 2.21003V5.00003C16.94 5.00003 20.83 9.48003 19.84 14.61C19.23 17.73 16.72 20.24 13.6 20.85C8.87002 21.77 4.69002 18.52 4.07002 14.13C3.99002 13.53 4.47002 13 5.07002 13C5.57002 13 5.99002 13.37 6.05002 13.85C6.53002 17.16 9.71002 19.61 13.28 18.86C15.54 18.39 17.38 16.56 17.85 14.29C18.67 10.42 15.72 7.00003 11.99 7.00003V9.80003C11.99 10.24 11.45 10.46 11.14 10.15L7.35002 6.36003C7.15002 6.16003 7.15002 5.85003 7.35002 5.65003L11.14 1.86003C11.45 1.54003 11.99 1.76003 11.99 2.21003ZM10.04 16H10.89V11.73H10.8L9.03002 12.36V13.05L10.04 12.74V16ZM15.17 14.24C15.17 14.56 15.14 14.84 15.07 15.06C15 15.28 14.9 15.48 14.78 15.63C14.66 15.78 14.5 15.89 14.33 15.96C14.16 16.03 13.96 16.06 13.74 16.06C13.52 16.06 13.33 16.03 13.15 15.96C12.97 15.89 12.82 15.78 12.69 15.63C12.56 15.48 12.46 15.29 12.39 15.06C12.32 14.83 12.28 14.56 12.28 14.24V13.5C12.28 13.18 12.31 12.9 12.38 12.68C12.45 12.46 12.55 12.26 12.67 12.11C12.79 11.96 12.95 11.85 13.12 11.78C13.29 11.71 13.49 11.68 13.71 11.68C13.93 11.68 14.12 11.71 14.3 11.78C14.48 11.85 14.63 11.96 14.76 12.11C14.89 12.26 14.99 12.45 15.06 12.68C15.13 12.91 15.17 13.18 15.17 13.5V14.24ZM14.28 12.9C14.31 13.03 14.32 13.19 14.32 13.38H14.31V14.35C14.31 14.54 14.29 14.7 14.27 14.83C14.25 14.96 14.21 15.07 14.16 15.15C14.11 15.23 14.04 15.29 13.97 15.32C13.9 15.35 13.81 15.37 13.72 15.37C13.63 15.37 13.55 15.35 13.47 15.32C13.39 15.29 13.33 15.23 13.28 15.15C13.23 15.07 13.19 14.96 13.16 14.83C13.13 14.7 13.12 14.54 13.12 14.35V13.38C13.12 13.19 13.13 13.03 13.16 12.9C13.19 12.77 13.23 12.67 13.28 12.59C13.33 12.51 13.4 12.45 13.47 12.42C13.54 12.39 13.63 12.37 13.72 12.37C13.81 12.37 13.89 12.39 13.97 12.42C14.05 12.45 14.11 12.51 14.16 12.59C14.21 12.67 14.25 12.77 14.28 12.9Z" fill="currentColor"/></svg>';

const RuxIconReplay10 = class {
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

exports.rux_icon_replay_10 = RuxIconReplay10;