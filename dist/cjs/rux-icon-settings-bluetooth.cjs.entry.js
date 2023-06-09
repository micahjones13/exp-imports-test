'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.03 6.37997L13.41 9.99997L17.03 13.61C17.21 13.8 17.32 14.05 17.32 14.32C17.32 14.59 17.22 14.84 17.03 15.03L12.71 19.35C12.52 19.54 12.26 19.64 12 19.64C11.87 19.64 11.74 19.61 11.62 19.56C11.24 19.41 11 19.04 11 18.64V12.41L7.14 16.26C6.75 16.65 6.12 16.65 5.73 16.26C5.34 15.87 5.34 15.24 5.73 14.85L10.58 9.99997L5.73 5.13997C5.34 4.74997 5.34 4.11997 5.73 3.72997C6.12 3.33997 6.75 3.33997 7.14 3.72997L11 7.57997V1.34997C11 0.949974 11.24 0.579974 11.61 0.429974C11.98 0.279974 12.41 0.359974 12.7 0.649974L17.03 4.95997C17.21 5.14997 17.32 5.39997 17.32 5.66997C17.32 5.93997 17.22 6.18997 17.03 6.37997ZM9 22H7V24H9V22ZM13 24V22H11V24H13ZM15 22H17V24H15V22ZM13 3.76997L14.91 5.67997L13 7.57997V3.76997ZM14.91 14.32L13 12.41V16.23L14.91 14.32Z" fill="currentColor"/></svg>';

const RuxIconSettingsBluetooth = class {
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

exports.rux_icon_settings_bluetooth = RuxIconSettingsBluetooth;
