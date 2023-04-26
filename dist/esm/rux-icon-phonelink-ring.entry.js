import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 1H14C15.1 1 16 1.9 16 3V21C16 22.1 15.1 23 14 23H4C2.9 23 2 22.1 2 21V3C2 1.9 2.9 1 4 1ZM4 20H14V4H4V20ZM20.63 8.26C20.37 7.94 19.89 7.9 19.59 8.2L19.56 8.23C19.31 8.48 19.3 8.88 19.51 9.16C20.77 10.8 20.76 13.03 19.49 14.73C19.28 15.01 19.3 15.4 19.54 15.65L19.59 15.7C19.88 15.99 20.35 15.96 20.62 15.65C22.42 13.52 22.42 10.46 20.63 8.26ZM17.36 10.43L17.42 10.37C17.75 10.04 18.3 10.12 18.52 10.54C19.02 11.46 19.02 12.51 18.53 13.4C18.31 13.8 17.76 13.87 17.44 13.55L17.36 13.47C17.16 13.27 17.1 12.97 17.21 12.71C17.42 12.22 17.42 11.68 17.21 11.19C17.1 10.93 17.16 10.63 17.36 10.43Z" fill="currentColor"/></svg>';

const RuxIconPhonelinkRing = class {
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

export { RuxIconPhonelinkRing as rux_icon_phonelink_ring };
