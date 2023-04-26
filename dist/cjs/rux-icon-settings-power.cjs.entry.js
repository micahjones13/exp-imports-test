'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0001 3C11.0001 2.45 11.4501 2 12.0001 2C12.5501 2 13.0001 2.45 13.0001 3V11C13.0001 11.55 12.5501 12 12.0001 12C11.4501 12 11.0001 11.55 11.0001 11V3ZM7.00006 24H9.00006V22H7.00006V24ZM11.0001 22V24H13.0001V22H11.0001ZM15.9401 5.06L15.9201 5.08C15.5101 5.49 15.5601 6.16 16.0001 6.54C17.5101 7.88 18.3301 9.97 17.8801 12.24C17.4201 14.52 15.5901 16.38 13.3201 16.86C9.43006 17.69 6.00006 14.74 6.00006 11C6.00006 9.22 6.78006 7.63 8.01006 6.53C8.44006 6.14 8.48006 5.49 8.08006 5.08L8.06006 5.06C7.69006 4.69 7.10006 4.67 6.70006 5.02C4.69006 6.79 3.58006 9.55 4.14006 12.54C4.73006 15.69 7.25006 18.24 10.4001 18.85C15.5201 19.84 20.0001 15.95 20.0001 11C20.0001 8.62 18.9501 6.48 17.2901 5.01C16.9001 4.67 16.3101 4.69 15.9401 5.06ZM17.0001 22V24H15.0001V22H17.0001Z" fill="currentColor"/></svg>';

const RuxIconSettingsPower = class {
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

exports.rux_icon_settings_power = RuxIconSettingsPower;
