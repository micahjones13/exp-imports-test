import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.59 5.41012C6.81 4.63012 6.81 3.36012 7.59 2.58012C8.37 1.80012 9.64 1.80012 10.42 2.58012C11.2 3.36012 11.2 4.63012 10.42 5.41012C9.63 6.20012 8.37 6.20012 7.59 5.41012ZM6 16.0001V8.00012C6 7.45012 5.55 7.00012 5 7.00012C4.45 7.00012 4 7.45012 4 8.00012V16.0001C4 18.7601 6.24 21.0001 9 21.0001H14C14.55 21.0001 15 20.5501 15 20.0001C15 19.4501 14.55 19.0001 14 19.0001H9C7.34 19.0001 6 17.6601 6 16.0001ZM15.51 15.5801L19.28 19.3501C19.68 19.7501 19.68 20.3901 19.28 20.7801C18.89 21.1701 18.24 21.1701 17.85 20.7801L15.07 18.0001H10C8.34 18.0001 7 16.6601 7 15.0001V9.25012C7 8.01012 8.01 7.00012 9.25 7.00012H9.28C9.62 7.00012 9.95 7.09012 10.24 7.23012C10.5 7.35012 10.74 7.52012 10.93 7.73012L12.33 9.28012C13.2 10.2401 14.66 11.0101 16.08 11.2501C16.61 11.3401 17 11.7701 17 12.3001C17 12.9801 16.37 13.4801 15.7 13.3401C14.16 13.0201 12.59 12.2101 11.5 11.3201V15.0001H14.1C14.63 15.0001 15.14 15.2101 15.51 15.5801Z" fill="currentColor"/></svg>';

const RuxIconAirlineSeatReclineNormal = class {
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

export { RuxIconAirlineSeatReclineNormal as rux_icon_airline_seat_recline_normal };
