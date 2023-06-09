'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.49 3.47998C15.49 4.57998 14.59 5.47998 13.49 5.47998C12.39 5.47998 11.49 4.57998 11.49 3.47998C11.49 2.37998 12.39 1.47998 13.49 1.47998C14.59 1.47998 15.49 2.37998 15.49 3.47998ZM10.89 14.98L10.32 17.48C10.08 18.54 9.03998 19.21 7.97998 19L3.86998 18.18C3.32998 18.07 2.97998 17.54 3.08998 17V16.96C3.19998 16.42 3.72998 16.07 4.26998 16.18L8.18998 16.98L9.78998 8.87998L7.98998 9.57998V11.98C7.98998 12.53 7.53998 12.98 6.98998 12.98C6.43998 12.98 5.98998 12.53 5.98998 11.98V9.60998C5.98998 8.79998 6.46998 8.07998 7.20998 7.75998L11.19 6.07998C11.34 6.07998 11.465 6.05498 11.59 6.02998C11.715 6.00498 11.84 5.97998 11.99 5.97998C12.69 5.97998 13.29 6.37998 13.69 6.97998L14.69 8.57998C15.36 9.75998 16.62 10.66 18.14 10.91C18.63 10.99 18.99 11.4 18.99 11.89C18.99 12.5 18.45 12.98 17.85 12.89C16.11 12.61 14.56 11.72 13.49 10.48L12.89 13.48L14.37 14.89C14.77 15.27 14.99 15.79 14.99 16.34V21.98C14.99 22.53 14.54 22.98 13.99 22.98C13.44 22.98 12.99 22.53 12.99 21.98V16.98L10.89 14.98Z" fill="currentColor"/></svg>';

const RuxIconDirectionsRun = class {
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

exports.rux_icon_directions_run = RuxIconDirectionsRun;
