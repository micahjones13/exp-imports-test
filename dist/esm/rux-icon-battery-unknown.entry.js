import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.67 4H14V3C14 2.45 13.55 2 13 2H11C10.45 2 10 2.45 10 3V4H8.33C7.6 4 7 4.6 7 5.33V20.66C7 21.4 7.6 22 8.34 22H15.66C16.4 22 17 21.4 17 20.67V5.33C17 4.6 16.4 4 15.67 4ZM13 16V18H11V16H13ZM13.63 13.4C13.92 13.11 14.3 12.69 14.3 12.69C14.73 12.26 15 11.66 15 11C15 9.34 13.66 8 12 8C10.69 8 9.59 8.83 9.17 9.99C9 10.48 9.36 11 9.88 11C10.2 11 10.48 10.8 10.59 10.49C10.79 9.91 11.35 9.5 12 9.5C12.83 9.5 13.5 10.17 13.5 11C13.5 11.41 13.33 11.79 13.06 12.06L12.13 13C12.02 13.12 11.9 13.26 11.79 13.4C11.7607 13.4367 11.7367 13.4788 11.7142 13.5183C11.706 13.5327 11.698 13.5467 11.69 13.56C11.62 13.66 11.55 13.76 11.49 13.87C11.32 14.2 11.2 14.58 11.2 15H12.8C12.8 14.82 12.87 14.61 12.96 14.39C13.01 14.27 13.07 14.14 13.15 14.02L13.24 13.87C13.36 13.71 13.49 13.54 13.63 13.4Z" fill="currentColor"/></svg>';

const RuxIconBatteryUnknown = class {
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

export { RuxIconBatteryUnknown as rux_icon_battery_unknown };