import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 4H14L12.59 2.59C12.21 2.21 11.7 2 11.17 2H6C4.9 2 4.01 2.9 4.01 4L4 16C4 17.1 4.9 18 6 18H22C23.1 18 24 17.1 24 16V6C24 4.9 23.1 4 22 4ZM1 6C0.45 6 0 6.45 0 7V11H0.01L0 20C0 21.1 0.9 22 2 22H19C19.55 22 20 21.55 20 21C20 20.45 19.55 20 19 20H3C2.45 20 2 19.55 2 19V7C2 6.45 1.55 6 1 6ZM11.11 9.52L7.6 14.2C7.35 14.53 7.59 15 8 14.99H19.99C20.4 14.99 20.64 14.51 20.38 14.18L17.89 10.98C17.69 10.73 17.31 10.72 17.11 10.97L15.01 13.5L11.91 9.51C11.7 9.25 11.31 9.26 11.11 9.52Z" fill="currentColor"/></svg>';

const RuxIconPermMedia = class {
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

export { RuxIconPermMedia as rux_icon_perm_media };
