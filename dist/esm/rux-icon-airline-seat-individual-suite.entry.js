import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 7H19C21.21 7 23 8.79 23 11V15C23 16.1 22.1 17 21 17H3C1.9 17 1 16.1 1 15V8C1 7.45 1.45 7 2 7C2.55 7 3 7.45 3 8V14H11V9C11 7.9 11.9 7 13 7ZM10 10C10 11.65 8.65 13 7 13C5.35 13 4 11.65 4 10C4 8.35 5.35 7 7 7C8.65 7 10 8.35 10 10Z" fill="currentColor"/></svg>';

const RuxIconAirlineSeatIndividualSuite = class {
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

export { RuxIconAirlineSeatIndividualSuite as rux_icon_airline_seat_individual_suite };
