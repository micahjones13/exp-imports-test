import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 6H17.82C17.93 5.69 18 5.35 18 5C18 3.34 16.66 2 15 2C13.95 2 13.04 2.54 12.5 3.35L12 4.02L11.5 3.34C10.96 2.54 10.05 2 9 2C7.34 2 6 3.34 6 5C6 5.35 6.07 5.69 6.18 6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM15 4C15.55 4 16 4.45 16 5C16 5.55 15.55 6 15 6C14.45 6 14 5.55 14 5C14 4.45 14.45 4 15 4ZM10 5C10 4.45 9.55 4 9 4C8.45 4 8 4.45 8 5C8 5.55 8.45 6 9 6C9.55 6 10 5.55 10 5ZM5 19C4.45 19 4 18.55 4 18V17H20V18C20 18.55 19.55 19 19 19H5ZM4 9V14H20V9C20 8.45 19.55 8 19 8H14.92L16.4 10.02C16.73 10.47 16.63 11.1 16.18 11.42C15.74 11.74 15.11 11.64 14.79 11.2L12 7.4L9.21 11.2C8.89 11.64 8.26 11.74 7.82 11.42C7.37 11.1 7.27 10.47 7.6 10.02L9.08 8H5C4.45 8 4 8.45 4 9Z" fill="currentColor"/></svg>';

const RuxIconRedeem = class {
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

export { RuxIconRedeem as rux_icon_redeem };
