import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.67 4H14V3C14 2.45 13.55 2 13 2H11C10.45 2 10 2.45 10 3V4H8.33C7.6 4 7 4.6 7 5.33V20.66C7 21.4 7.6 22 8.34 22H15.66C16.4 22 17 21.4 17 20.67V5.33C17 4.6 16.4 4 15.67 4ZM13 16V18H11V16H13ZM12 14C12.55 14 13 13.55 13 13V10C13 9.45 12.55 9 12 9C11.45 9 11 9.45 11 10V13C11 13.55 11.45 14 12 14Z" fill="currentColor"/></svg>';

const RuxIconBatteryAlert = class {
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

export { RuxIconBatteryAlert as rux_icon_battery_alert };
