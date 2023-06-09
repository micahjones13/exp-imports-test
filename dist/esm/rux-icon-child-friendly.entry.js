import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 10.0002V3.08022C13 2.47022 13.54 1.99022 14.14 2.08022C18.02 2.63022 21 5.97022 21 10.0002H13ZM21 11.0002C21 12.8402 20.37 14.5402 19.32 15.8902C20.24 16.7102 20.73 18.0002 20.38 19.3902C20.06 20.6502 19.02 21.6502 17.75 21.9202C15.67 22.3602 13.8 20.9402 13.53 19.0002H11.45C11.18 20.9502 9.3 22.3702 7.2 21.9102C5.94 21.6302 4.9 20.6202 4.6 19.3602C4.2 17.6902 5.01 16.1302 6.34 15.4202C6.11 15.0702 4.22 11.0002 4.22 11.0002H3C2.45 11.0002 2 10.5502 2 10.0002C2 9.45022 2.45 9.00022 3 9.00022H4.86C5.24 9.00022 5.6 9.22022 5.76 9.57022L6.44 11.0002H21ZM8 20.0002C7.17 20.0002 6.5 19.3302 6.5 18.5002C6.5 17.6702 7.17 17.0002 8 17.0002C8.83 17.0002 9.5 17.6702 9.5 18.5002C9.5 19.3302 8.83 20.0002 8 20.0002ZM15.5 18.5002C15.5 19.3302 16.17 20.0002 17 20.0002C17.83 20.0002 18.5 19.3302 18.5 18.5002C18.5 17.6702 17.83 17.0002 17 17.0002C16.17 17.0002 15.5 17.6702 15.5 18.5002Z" fill="currentColor"/></svg>';

const RuxIconChildFriendly = class {
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

export { RuxIconChildFriendly as rux_icon_child_friendly };
