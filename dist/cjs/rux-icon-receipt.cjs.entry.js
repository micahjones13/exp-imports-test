'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.99 2.2101L21 2.21H20.99V2.2101ZM20.99 2.2101C20.8634 2.2126 20.7377 2.26256 20.65 2.36L19.86 3.15C19.66 3.35 19.35 3.35 19.15 3.15L18.36 2.36C18.16 2.16 17.85 2.16 17.65 2.36L16.86 3.15C16.66 3.35 16.35 3.35 16.15 3.15L15.36 2.36C15.16 2.16 14.85 2.16 14.65 2.36L13.86 3.15C13.66 3.35 13.35 3.35 13.15 3.15L12.36 2.36C12.16 2.16 11.85 2.16 11.65 2.36L10.86 3.15C10.66 3.35 10.35 3.35 10.15 3.15L9.35 2.35C9.15 2.15 8.84 2.15 8.64 2.35L7.85 3.15C7.65 3.35 7.34 3.35 7.14 3.15L6.35 2.35C6.15 2.15 5.84 2.15 5.64 2.35L4.85 3.15C4.65 3.35 4.34 3.35 4.14 3.15L3.35 2.35C3.26 2.26 3.13 2.21 3 2.21V21.8C3.13 21.8 3.26 21.75 3.35 21.65L4.14 20.86C4.34 20.66 4.65 20.66 4.85 20.86L5.64 21.65C5.84 21.85 6.15 21.85 6.35 21.65L7.14 20.86C7.34 20.66 7.65 20.66 7.85 20.86L8.64 21.65C8.84 21.85 9.15 21.85 9.35 21.65L10.14 20.86C10.34 20.66 10.65 20.66 10.85 20.86L11.64 21.65C11.84 21.85 12.15 21.85 12.35 21.65L13.14 20.86C13.34 20.66 13.65 20.66 13.85 20.86L14.64 21.65C14.84 21.85 15.15 21.85 15.35 21.65L16.14 20.86C16.34 20.66 16.65 20.66 16.85 20.86L17.64 21.65C17.84 21.85 18.15 21.85 18.35 21.65L19.14 20.86C19.34 20.66 19.65 20.66 19.85 20.86L20.64 21.65C20.74 21.75 20.87 21.8 20.99 21.8V2.2101ZM7 17H17C17.55 17 18 16.55 18 16C18 15.45 17.55 15 17 15H7C6.45 15 6 15.45 6 16C6 16.55 6.45 17 7 17ZM17 13H7C6.45 13 6 12.55 6 12C6 11.45 6.45 11 7 11H17C17.55 11 18 11.45 18 12C18 12.55 17.55 13 17 13ZM7 9H17C17.55 9 18 8.55 18 8C18 7.45 17.55 7 17 7H7C6.45 7 6 7.45 6 8C6 8.55 6.45 9 7 9Z" fill="currentColor"/></svg>';

const RuxIconReceipt = class {
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

exports.rux_icon_receipt = RuxIconReceipt;
