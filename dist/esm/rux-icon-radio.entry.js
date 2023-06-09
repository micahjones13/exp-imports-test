import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.24 6.15005C2.51 6.43005 2 7.17005 2 8.00005V20C2 21.1 2.9 22 4 22H20C21.11 22 22 21.1 22 20V8.00005C22 6.90005 21.1 6.00005 20 6.00005H8.3L15.73 3.00005C16.19 2.81005 16.41 2.29005 16.22 1.83005C16.03 1.37005 15.51 1.15005 15.05 1.34005L3.24 6.15005ZM7 20C5.34 20 4 18.66 4 17C4 15.34 5.34 14 7 14C8.66 14 10 15.34 10 17C10 18.66 8.66 20 7 20ZM18 11V12H20V9.00005C20 8.45005 19.55 8.00005 19 8.00005H5C4.45 8.00005 4 8.45005 4 9.00005V12H16V11C16 10.45 16.45 10 17 10C17.55 10 18 10.45 18 11Z" fill="currentColor"/></svg>';

const RuxIconRadio = class {
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

export { RuxIconRadio as rux_icon_radio };
