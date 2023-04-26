'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.2 1C19.19 1 20 1.81 20 2.8V17.2C20 18.19 19.19 19 18.2 19L9.8 18.99C8.81 18.99 8 18.19 8 17.2V2.8C8 1.81 8.81 1 9.8 1H18.2ZM14 3C12.9 3 12 3.89 12 5C12 6.11 12.9 7 14 7C15.1 7 16 6.11 16 5C16 3.89 15.1 3 14 3ZM18 12.5C18 14.71 16.21 16.5 14 16.5C11.79 16.5 10 14.71 10 12.5C10 10.29 11.79 8.5 14 8.5C16.21 8.5 18 10.29 18 12.5ZM14 15C12.6193 15 11.5 13.8807 11.5 12.5C11.5 11.1193 12.6193 10 14 10C15.3807 10 16.5 11.1193 16.5 12.5C16.5 13.8807 15.3807 15 14 15ZM6 6C6 5.45 5.55 5 5 5C4.45 5 4 5.45 4 6V21C4 22.1 4.89 23 6 23H15C15.55 23 16 22.55 16 22C16 21.45 15.55 21 15 21H7C6.45 21 6 20.55 6 20V6Z" fill="currentColor"/></svg>';

const RuxIconSpeakerGroup = class {
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

exports.rux_icon_speaker_group = RuxIconSpeakerGroup;
