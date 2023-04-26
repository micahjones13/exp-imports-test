import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM13.41 18.67V18.09C15.15 17.76 16.52 16.76 16.54 14.93C16.54 12.41 14.38 11.54 12.36 11.02C10.34 10.5 9.69 9.95 9.69 9.11C9.69 8.15 10.59 7.47 12.09 7.47C13.35 7.47 13.98 7.96 14.21 8.72C14.31 9.08 14.61 9.34 14.98 9.34H15.24C15.83 9.34 16.25 8.76 16.05 8.21C15.67 7.15 14.8 6.29 13.42 5.95V5.33C13.42 4.6 12.82 4 12.09 4H12.08C11.35 4 10.75 4.6 10.75 5.33V5.93C9.03 6.3 7.64 7.42 7.64 9.14C7.64 11.19 9.34 12.21 11.82 12.81C14.05 13.34 14.49 14.12 14.49 14.95C14.49 15.56 14.05 16.54 12.09 16.54C10.63 16.54 9.87 16.02 9.58 15.27C9.44 14.92 9.14 14.67 8.77 14.67H8.53C7.93 14.67 7.5 15.28 7.73 15.83C8.23 17.06 9.41 17.79 10.74 18.07V18.67C10.74 19.4 11.34 20 12.07 20H12.08C12.81 20 13.41 19.4 13.41 18.67Z" fill="currentColor"/></svg>';

const RuxIconMonetizationOn = class {
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

export { RuxIconMonetizationOn as rux_icon_monetization_on };
