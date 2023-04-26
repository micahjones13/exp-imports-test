import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 4V3.5C22 2.12 20.88 1 19.5 1C18.12 1 17 2.12 17 3.5V4C16.45 4 16 4.45 16 5V9C16 9.55 16.45 10 17 10H22C22.55 10 23 9.55 23 9V5C23 4.45 22.55 4 22 4ZM19 13C19 12.66 18.96 12.33 18.92 12H20.95C20.98 12.33 21 12.66 21 13C21 18.52 16.52 23 11 23C5.48 23 1 18.52 1 13C1 7.48 5.48 3 11 3C12.05 3 13.05 3.16 14 3.46V6C14 7.1 13.1 8 12 8H10V10C10 10.55 9.55 11 9 11H7V13H13C13.55 13 14 13.45 14 14V17H15C15.9 17 16.64 17.58 16.9 18.39C18.2 16.97 19 15.08 19 13ZM3 13C3 17.08 6.05 20.44 10 20.93V19C8.9 19 8 18.1 8 17V16L3.21 11.21C3.08 11.79 3 12.38 3 13ZM18 4H21V3.5C21 2.67 20.33 2 19.5 2C18.67 2 18 2.67 18 3.5V4Z" fill="currentColor"/></svg>';

const RuxIconVpnLock = class {
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

export { RuxIconVpnLock as rux_icon_vpn_lock };
