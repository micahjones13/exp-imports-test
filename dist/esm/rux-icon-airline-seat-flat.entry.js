import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 11V13H9V9C9 7.9 9.9 7 11 7H18C20.21 7 22 8.79 22 11ZM2 15C2 15.55 2.45 16 3 16H8V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V16H21C21.55 16 22 15.55 22 15C22 14.45 21.55 14 21 14H3C2.45 14 2 14.45 2 15ZM7.1 7.86C8.28 9.02 8.3 10.91 7.14 12.1C5.98 13.28 4.09 13.3 2.9 12.14C1.72 10.98 1.7 9.09 2.86 7.9C4.02 6.72 5.91 6.7 7.1 7.86Z" fill="currentColor"/></svg>';

const RuxIconAirlineSeatFlat = class {
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

export { RuxIconAirlineSeatFlat as rux_icon_airline_seat_flat };
