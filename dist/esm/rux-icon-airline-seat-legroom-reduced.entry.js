import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 4V12C5 13.66 6.34 15 8 15H11C11.55 15 12 15.45 12 16C12 16.55 11.55 17 11 17H8C5.24 17 3 14.76 3 12V4C3 3.45 3.45 3 4 3C4.55 3 5 3.45 5 4ZM18.5 21C19.42 21 20.15 20.16 19.97 19.2C19.83 18.49 19.17 18 18.44 18H17L19 11C19 9.9 18.1 9 17 9H12V3H6V11C6 12.65 7.35 14 9 14H15L13.87 18.51C13.55 19.78 14.51 21 15.81 21H18.5Z" fill="currentColor"/></svg>';

const RuxIconAirlineSeatLegroomReduced = class {
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

export { RuxIconAirlineSeatLegroomReduced as rux_icon_airline_seat_legroom_reduced };
