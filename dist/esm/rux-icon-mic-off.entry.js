import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 11.6V6C15 4.34 13.66 3 12 3C10.46 3 9.20998 4.16 9.03998 5.65L15 11.6ZM18.08 12C17.67 12 17.31 12.3 17.25 12.71C17.2 13.03 17.13 13.35 17.03 13.64L18.3 14.91C18.6 14.31 18.82 13.66 18.93 12.97C19 12.46 18.6 12 18.08 12ZM3.70998 5.97C3.31998 5.58 3.31998 4.95 3.70998 4.56C4.09998 4.17 4.72998 4.17 5.11998 4.56L20.45 19.9C20.84 20.29 20.84 20.92 20.45 21.31C20.06 21.7 19.43 21.7 19.04 21.31L15.55 17.82C14.77 18.27 13.91 18.59 13 18.72V21C13 21.55 12.55 22 12 22C11.45 22 11 21.55 11 21V18.72C8.02998 18.27 5.52998 15.93 5.06998 12.97C4.99998 12.46 5.39998 12 5.91998 12C6.32998 12 6.68998 12.3 6.74998 12.71C7.11998 15.33 9.45998 17.1 12 17.1C12.81 17.1 13.6 16.91 14.31 16.58L12.65 14.92C12.04 15.05 11.38 15.04 10.63 14.61C9.59998 14.02 8.99998 12.89 8.99998 11.7V11.27L3.70998 5.97Z" fill="currentColor"/></svg>';

const RuxIconMicOff = class {
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

export { RuxIconMicOff as rux_icon_mic_off };
