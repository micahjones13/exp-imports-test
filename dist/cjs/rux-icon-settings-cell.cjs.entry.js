'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 0.01L8 0C6.9 0 6 0.9 6 2V18C6 19.1 6.9 20 8 20H16C17.1 20 18 19.1 18 18V2C18 0.9 17.1 0.01 16 0.01ZM9 24V22H7V24H9ZM11 24H13V22H11V24ZM15 24V22H17V24H15ZM8 16H16V4H8V16Z" fill="currentColor"/></svg>';

const RuxIconSettingsCell = class {
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

exports.rux_icon_settings_cell = RuxIconSettingsCell;
