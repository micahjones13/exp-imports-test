import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3ZM8 5H5V8C6.66 8 8 6.66 8 5ZM5 10.91C5 10.42 5.36 10.01 5.85 9.93C7.93 9.57 9.57 7.93 9.93 5.85C10.01 5.36 10.42 5 10.91 5C11.52 5 12 5.53 11.91 6.13C11.43 9.09 9.1 11.43 6.14 11.91C5.54 12.01 5 11.52 5 10.91ZM8.12 13.99L5.63 17.19C5.37 17.52 5.61 18 6.02 18.01H18.01C18.42 18.01 18.66 17.54 18.41 17.21L14.9 12.53C14.7 12.26 14.3 12.26 14.1 12.52L11 16.51L8.9 13.98C8.7 13.73 8.32 13.74 8.12 13.99Z" fill="currentColor"/></svg>';

const RuxIconSatellite = class {
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

export { RuxIconSatellite as rux_icon_satellite };
