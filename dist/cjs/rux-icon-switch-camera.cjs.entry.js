'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.83 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4H7.17L8.4 2.65C8.78 2.24 9.32 2 9.88 2H14.12C14.68 2 15.22 2.24 15.59 2.65L16.83 4ZM15 13V15.5L18.15 12.36C18.35 12.16 18.35 11.85 18.15 11.65L15 8.5V11H9V8.5L5.85 11.64C5.65 11.84 5.65 12.15 5.85 12.35L9 15.5V13H15Z" fill="currentColor"/></svg>';

const RuxIconSwitchCamera = class {
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

exports.rux_icon_switch_camera = RuxIconSwitchCamera;
