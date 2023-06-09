import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 6C13.69 6 11 8.69 11 12C11 15.31 13.69 18 17 18C20.31 18 23 15.31 23 12C23 8.69 20.31 6 17 6ZM5 8C2.79 8 1 9.79 1 12C1 14.21 2.79 16 5 16C7.21 16 9 14.21 9 12C9 9.79 7.21 8 5 8ZM13 12C13 14.21 14.79 16 17 16C19.21 16 21 14.21 21 12C21 9.79 19.21 8 17 8C14.79 8 13 9.79 13 12Z" fill="currentColor"/></svg>';

const RuxIconHdrWeak = class {
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

export { RuxIconHdrWeak as rux_icon_hdr_weak };
