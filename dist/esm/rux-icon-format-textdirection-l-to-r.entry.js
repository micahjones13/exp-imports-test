import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 14V10C6.66 10 4.79 7.99 5.02 5.61C5.22 3.53 7.08 2 9.17 2H16C16.55 2 17 2.45 17 3C17 3.55 16.55 4 16 4H15V14C15 14.55 14.55 15 14 15C13.45 15 13 14.55 13 14V4H11V14C11 14.55 10.55 15 10 15C9.45 15 9 14.55 9 14ZM17.86 14.86L20.65 17.65C20.84 17.84 20.84 18.16 20.64 18.35L17.85 21.14C17.54 21.46 17 21.24 17 20.79V19H6C5.45 19 5 18.55 5 18C5 17.45 5.45 17 6 17H17V15.21C17 14.76 17.54 14.54 17.86 14.86Z" fill="currentColor"/></svg>';

const RuxIconFormatTextdirectionLToR = class {
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

export { RuxIconFormatTextdirectionLToR as rux_icon_format_textdirection_l_to_r };
