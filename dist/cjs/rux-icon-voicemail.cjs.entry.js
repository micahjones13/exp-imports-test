'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.5 6C15.46 6 13 8.46 13 11.5C13 12.83 13.47 14.05 14.26 15H9.74C10.53 14.05 11 12.83 11 11.5C11 8.46 8.54 6 5.5 6C2.46 6 0 8.46 0 11.5C0 14.54 2.46 17 5.5 17H18.5C21.54 17 24 14.54 24 11.5C24 8.46 21.54 6 18.5 6ZM5.5 15C3.57 15 2 13.43 2 11.5C2 9.57 3.57 8 5.5 8C7.43 8 9 9.57 9 11.5C9 13.43 7.43 15 5.5 15ZM15 11.5C15 13.43 16.57 15 18.5 15C20.43 15 22 13.43 22 11.5C22 9.57 20.43 8 18.5 8C16.57 8 15 9.57 15 11.5Z" fill="currentColor"/></svg>';

const RuxIconVoicemail = class {
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

exports.rux_icon_voicemail = RuxIconVoicemail;