'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.05 2.47C6.94 0.93 9.36 0 12 0C14.64 0 17.06 0.93 18.94 2.48C19.4 2.86 19.44 3.55 19.02 3.97C18.66 4.33 18.09 4.36 17.7 4.04C16.16 2.77 14.17 2 12 2C9.83 2 7.84 2.77 6.29 4.03C5.9 4.35 5.33 4.32 4.97 3.96C4.55 3.54 4.59 2.85 5.05 2.47ZM7.82 6.82C8.17 7.17 8.72 7.2 9.12 6.92C9.93 6.34 10.93 6 12 6C13.07 6 14.07 6.34 14.88 6.91C15.28 7.19 15.83 7.17 16.18 6.82C16.61 6.39 16.57 5.68 16.09 5.32C14.94 4.49 13.53 4 12 4C10.47 4 9.06 4.49 7.91 5.32C7.42 5.67 7.39 6.39 7.82 6.82ZM15 9C15.55 9 16 9.45 16 10V22C16 22.55 15.55 23 15 23H9C8.45 23 8 22.55 8 22V10C8 9.45 8.45 9 9 9H15ZM10 13C10 14.1 10.9 15 12 15C13.1 15 14 14.1 14 13C14 11.9 13.1 11 12 11C10.9 11 10 11.9 10 13Z" fill="currentColor"/></svg>';

const RuxIconSettingsRemote = class {
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

exports.rux_icon_settings_remote = RuxIconSettingsRemote;
