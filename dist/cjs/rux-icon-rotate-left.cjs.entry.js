'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 3.40977V4.06977C16.95 4.55977 20 7.91977 20 11.9998C20 15.6398 17.57 18.7098 14.23 19.6698C13.61 19.8498 13 19.3598 13 18.7098V18.6898C13 18.2598 13.27 17.8698 13.68 17.7498C16.18 17.0198 18 14.7298 18 11.9998C18 9.02977 15.84 6.56977 13 6.08977V7.61977C13 8.50977 11.93 8.95977 11.3 8.33977L9.17002 6.25977C8.77002 5.86977 8.77002 5.22977 9.17002 4.82977L11.29 2.69977C11.92 2.06977 13 2.51977 13 3.40977ZM5.00002 8.16977C5.31002 7.59977 6.10002 7.51977 6.56002 7.97977C6.87002 8.28977 6.94002 8.75977 6.72002 9.12977C6.52002 9.50977 6.36002 9.89977 6.24002 10.2998C6.12002 10.7198 5.73002 10.9998 5.30002 10.9998H5.29002C4.64002 10.9998 4.14002 10.3798 4.33002 9.74977C4.50002 9.19977 4.72002 8.67977 5.00002 8.16977ZM4.33002 14.2498C4.14002 13.6198 4.64002 12.9998 5.29002 12.9998H5.31002C5.74002 12.9998 6.13002 13.2798 6.25002 13.7198C6.37002 14.1198 6.53002 14.5098 6.73002 14.8798C6.94002 15.2598 6.86002 15.7198 6.56002 16.0298C6.10002 16.4898 5.30002 16.3998 4.99002 15.8298C4.71002 15.3198 4.49002 14.7898 4.33002 14.2498ZM8.16002 19.0198C8.67002 19.2998 9.20002 19.5198 9.75002 19.6798C10.37 19.8598 10.99 19.3598 10.99 18.7198V18.6898C10.99 18.2598 10.71 17.8698 10.29 17.7498C9.89002 17.6298 9.51002 17.4698 9.14002 17.2698C8.76002 17.0598 8.28002 17.1298 7.98002 17.4398L7.95002 17.4698C7.50002 17.9198 7.59002 18.7098 8.16002 19.0198Z" fill="currentColor"/></svg>';

const RuxIconRotateLeft = class {
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

exports.rux_icon_rotate_left = RuxIconRotateLeft;
