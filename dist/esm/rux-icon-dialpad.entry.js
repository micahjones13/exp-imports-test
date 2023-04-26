import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 3C4 1.9 4.9 1 6 1C7.1 1 8 1.9 8 3C8 4.1 7.1 5 6 5C4.9 5 4 4.1 4 3ZM10 21C10 19.9 10.9 19 12 19C13.1 19 14 19.9 14 21C14 22.1 13.1 23 12 23C10.9 23 10 22.1 10 21ZM6 7C4.9 7 4 7.9 4 9C4 10.1 4.9 11 6 11C7.1 11 8 10.1 8 9C8 7.9 7.1 7 6 7ZM4 15C4 13.9 4.9 13 6 13C7.1 13 8 13.9 8 15C8 16.1 7.1 17 6 17C4.9 17 4 16.1 4 15ZM18 5C19.1 5 20 4.1 20 3C20 1.9 19.1 1 18 1C16.9 1 16 1.9 16 3C16 4.1 16.9 5 18 5ZM10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17C10.9 17 10 16.1 10 15ZM18 13C16.9 13 16 13.9 16 15C16 16.1 16.9 17 18 17C19.1 17 20 16.1 20 15C20 13.9 19.1 13 18 13ZM16 9C16 7.9 16.9 7 18 7C19.1 7 20 7.9 20 9C20 10.1 19.1 11 18 11C16.9 11 16 10.1 16 9ZM12 7C10.9 7 10 7.9 10 9C10 10.1 10.9 11 12 11C13.1 11 14 10.1 14 9C14 7.9 13.1 7 12 7ZM10 3C10 1.9 10.9 1 12 1C13.1 1 14 1.9 14 3C14 4.1 13.1 5 12 5C10.9 5 10 4.1 10 3Z" fill="currentColor"/></svg>';

const RuxIconDialpad = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return h("div", { style: style, innerHTML: svgIcon });
  }
};

export { RuxIconDialpad as rux_icon_dialpad };
