'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.69 1.70984C15.59 2.56984 16.39 3.52984 17.09 4.55984C18.92 7.26984 20 10.5098 20 13.9998C20 18.4198 16.42 21.9998 12 21.9998C7.58 21.9998 4 18.4198 4 13.9998C4 11.4598 4.68 9.07984 5.87 7.03984C6.03 6.74984 6.2 6.47984 6.38 6.20984C6.62 5.83984 7.17 5.96984 7.28 6.38984C7.34 6.60984 7.38 6.72984 7.48 6.92984C8.03 8.25984 9.29 9.18984 10.83 9.18984C12.89 9.18984 14.24 7.51984 14.24 5.45984C14.24 4.34984 14.04 3.10984 13.85 2.16984C13.75 1.68984 14.34 1.36984 14.69 1.70984ZM8.49 15.8598C8.49 17.5998 9.93 18.9998 11.71 18.9998C14.36 18.9998 16.51 16.8498 16.5 14.1998C16.5 13.1298 16.38 12.0698 16.15 11.0498C16.07 10.6798 15.61 10.5598 15.33 10.8198C14.28 11.8098 12.77 12.4398 11.3 12.7398C9.54 13.0998 8.49 14.2398 8.49 15.8598Z" fill="currentColor"/></svg>';

const RuxIconWhatshot = class {
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

exports.rux_icon_whatshot = RuxIconWhatshot;
