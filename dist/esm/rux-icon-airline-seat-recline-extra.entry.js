import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.35 5.63987C4.45 4.99987 4.23 3.75987 4.86 2.84987C5.49 1.94987 6.74 1.72987 7.65 2.35987C8.55 2.99987 8.77 4.23987 8.14 5.14987C7.5 6.04987 6.26 6.26987 5.35 5.63987ZM16 19.9999C16 19.4499 15.55 18.9999 15 18.9999H8.93C7.45 18.9999 6.19 17.9199 5.97 16.4599L4.16 7.77987C4.07 7.32987 3.67 6.99987 3.2 6.99987C2.58 6.99987 2.12 7.56987 2.24 8.17987L3.99 16.7599C4.37 19.1999 6.47 20.9999 8.94 20.9999H15C15.55 20.9999 16 20.5499 16 19.9999ZM11.35 14.9999H15.54C15.99 14.9999 16.42 15.1499 16.77 15.4199L21.06 18.7699C21.56 19.1599 21.61 19.8899 21.16 20.3399C20.79 20.7099 20.19 20.7499 19.77 20.4199L16.68 17.9999H9.83C8.39 17.9999 7.16 16.9799 6.88 15.5599L5.53 9.63987C5.32 8.41987 6.14 7.24987 7.37 7.02987H7.39C7.72 6.96987 8.06 6.99987 8.38 7.08987C8.65 7.16987 8.91 7.28987 9.14 7.46987L10.78 8.73987C11.76 9.50987 13.08 10.0299 14.39 10.0699C14.98 10.0899 15.47 10.5399 15.47 11.1299C15.47 11.7099 15 12.2099 14.42 12.1999C12.95 12.1799 11.6 11.6199 10.32 10.8999L11.35 14.9999Z" fill="currentColor"/></svg>';

const RuxIconAirlineSeatReclineExtra = class {
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

export { RuxIconAirlineSeatReclineExtra as rux_icon_airline_seat_recline_extra };
