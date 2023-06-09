import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 5H13C13.55 5 14 5.45 14 6C14 6.55 13.55 7 13 7H3C2.45 7 2 6.55 2 6C2 5.45 2.45 5 3 5H5L5.71 4.29C5.89 4.11 6.15 4 6.41 4H9.59C9.85 4 10.11 4.11 10.29 4.29L11 5ZM3 18C3 19.1 3.9 20 5 20H11C12.1 20 13 19.1 13 18V8H3V18ZM16 8H21C21.55 8 22 8.45 22 9C22 9.55 21.55 10 21 10H16C15.45 10 15 9.55 15 9C15 8.45 15.45 8 16 8ZM16 16H18C18.55 16 19 16.45 19 17C19 17.55 18.55 18 18 18H16C15.45 18 15 17.55 15 17C15 16.45 15.45 16 16 16ZM20 12H16C15.45 12 15 12.45 15 13C15 13.55 15.45 14 16 14H20C20.55 14 21 13.55 21 13C21 12.45 20.55 12 20 12Z" fill="currentColor"/></svg>';

const RuxIconDeleteSweep = class {
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

export { RuxIconDeleteSweep as rux_icon_delete_sweep };
