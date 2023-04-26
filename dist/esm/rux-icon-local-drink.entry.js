import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.22999 2C4.03999 2 3.10999 3.04 3.23999 4.22L5.00999 20.23C5.12999 21.23 5.96999 22 6.99999 22H17C18.03 22 18.87 21.23 18.99 20.23L20.76 4.22C20.89 3.04 19.96 2 18.77 2H5.22999ZM12 19C10.34 19 8.99999 17.66 8.99999 16C8.99999 14.45 10.81 12.05 11.62 11.06C11.82 10.81 12.19 10.81 12.39 11.06C13.2 12.06 15.01 14.45 15.01 16C15 17.66 13.66 19 12 19ZM5.66999 8H18.33L18.64 5.11C18.71 4.52 18.24 4 17.65 4H6.34999C5.74999 4 5.28999 4.52 5.34999 5.11L5.66999 8Z" fill="currentColor"/></svg>';

const RuxIconLocalDrink = class {
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

export { RuxIconLocalDrink as rux_icon_local_drink };
