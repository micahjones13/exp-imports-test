'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.2901 17.29L18.0001 16V11C18.0001 7.93 16.3601 5.36 13.5001 4.68V4C13.5001 3.17 12.8301 2.5 12.0001 2.5C11.1701 2.5 10.5001 3.17 10.5001 4V4.68C7.63005 5.36 6.00005 7.92 6.00005 11V16L4.71005 17.29C4.08005 17.92 4.52005 19 5.41005 19H18.5801C19.4801 19 19.9201 17.92 19.2901 17.29ZM12.0001 22C13.1001 22 14.0001 21.1 14.0001 20H10.0001C10.0001 21.1 10.8901 22 12.0001 22ZM14.2001 10.17C14.3901 9.93 14.5001 9.64 14.5001 9.33C14.5001 8.59 13.9101 8 13.1801 8H10.4001C9.90005 8 9.50005 8.4 9.50005 8.9C9.50005 9.4 9.90005 9.8 10.4001 9.8H12.3001L9.80005 12.83C9.61005 13.07 9.50005 13.36 9.50005 13.67V13.68C9.50005 14.41 10.0901 15 10.8201 15H13.6001C14.1001 15 14.5001 14.6 14.5001 14.1C14.5001 13.6 14.1001 13.2 13.6001 13.2H11.7001L14.2001 10.17Z" fill="currentColor"/></svg>';

const RuxIconNotificationsPaused = class {
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

exports.rux_icon_notifications_paused = RuxIconNotificationsPaused;
