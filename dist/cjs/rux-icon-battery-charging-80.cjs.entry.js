'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 2C13.5107 2 13.9352 2.38801 13.9932 2.8838L14 3V4H15.67C16.3571 4 16.929 4.53149 16.9939 5.20262L17 5.33V20.67C17 21.3571 16.4685 21.929 15.789 21.9939L15.66 22H8.33C7.64294 22 7.07104 21.4685 7.00613 20.7974L7 20.67V5.33C7 4.64294 7.53149 4.07104 8.20262 4.00613L8.33 4H10V3C10 2.48929 10.388 2.0648 10.8838 2.00676L11 2H13ZM13 3H11V5H8.33C8.1745 5 8.03847 5.11659 8.00689 5.2648L8 5.33L7.999 9L9.668 8.99918L8.17885 11.7886L8.12287 11.9056C7.70184 12.8861 8.40814 13.9997 9.50096 13.9997L9.67 13.999L9.67096 16.4997C9.67096 18.0582 11.7622 18.581 12.4933 17.2103L15.1631 12.2107L15.219 12.0938C15.6394 11.1131 14.9239 9.99969 13.841 9.99969L13.67 9.999L13.669 8.99918L16 9V5.33C16 5.1745 15.8834 5.03847 15.7352 5.00689L15.67 5H13V3ZM12.671 10.9997V7.49969C12.671 6.97969 11.971 6.80969 11.731 7.25969L9.06096 12.2597C8.88096 12.5997 9.12096 12.9997 9.50096 12.9997H10.671V16.4997C10.671 17.0197 11.371 17.1897 11.611 16.7397L14.281 11.7397C14.461 11.3997 14.211 10.9997 13.841 10.9997H12.671Z" fill="currentColor"/></svg>';

const RuxIconBatteryCharging80 = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return index.h("div", { style: style, innerHTML: svgIcon });
  }
};

exports.rux_icon_battery_charging_80 = RuxIconBatteryCharging80;
