import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 4H15.67C16.4 4 17 4.6 17 5.33V20.67C17 21.4 16.4 22 15.66 22H8.34C7.6 22 7 21.4 7 20.66V5.33C7 4.6 7.6 4 8.33 4H10V3C10 2.45 10.45 2 11 2H13C13.55 2 14 2.45 14 3V4ZM11.611 16.7397L14.281 11.7397C14.461 11.3997 14.211 10.9997 13.841 10.9997H12.671V7.49969C12.671 6.97969 11.971 6.80969 11.731 7.25969L9.06096 12.2597C8.88096 12.5997 9.12096 12.9997 9.50096 12.9997H10.671V16.4997C10.671 17.0197 11.371 17.1897 11.611 16.7397Z" fill="currentColor"/></svg>';

const RuxIconBatteryChargingFull = class {
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

export { RuxIconBatteryChargingFull as rux_icon_battery_charging_full };
