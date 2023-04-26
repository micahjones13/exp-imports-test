import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 7C3 6.45 3.45 6 4 6H20C20.55 6 21 5.55 21 5C21 4.45 20.55 4 20 4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H6C6.55 20 7 19.55 7 19C7 18.45 6.55 18 6 18H4C3.45 18 3 17.55 3 17V7ZM12 12H10C9.45 12 9 12.45 9 13V13.78C8.39 14.33 8 15.11 8 16C8 16.89 8.39 17.67 9 18.22V19C9 19.55 9.45 20 10 20H12C12.55 20 13 19.55 13 19V18.22C13.61 17.67 14 16.88 14 16C14 15.12 13.61 14.33 13 13.78V13C13 12.45 12.55 12 12 12ZM9.5 16C9.5 16.83 10.17 17.5 11 17.5C11.83 17.5 12.5 16.83 12.5 16C12.5 15.17 11.83 14.5 11 14.5C10.17 14.5 9.5 15.17 9.5 16ZM22 8H16C15.5 8 15 8.5 15 9V19C15 19.5 15.5 20 16 20H22C22.5 20 23 19.5 23 19V9C23 8.5 22.5 8 22 8ZM17 18H21V10H17V18Z" fill="currentColor"/></svg>';

const RuxIconDevicesOther = class {
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

export { RuxIconDevicesOther as rux_icon_devices_other };
