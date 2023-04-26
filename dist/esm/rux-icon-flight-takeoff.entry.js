import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.23 8.58C21.03 8.37 21.85 8.84 22.07 9.64C22.28 10.44 21.8 11.26 21 11.48L5.17998 15.72C4.74998 15.83 4.28998 15.64 4.05998 15.25L2.17998 12C2.00998 11.72 2.15998 11.35 2.47998 11.27L2.80998 11.18C3.11998 11.1 3.43998 11.17 3.68998 11.36L5.25998 12.6L10.23 11.27L6.78998 5.31C6.43998 4.7 6.75998 3.92 7.43998 3.73C7.79998 3.63 8.18998 3.72 8.45998 3.98L14.92 10L20.23 8.58ZM3.49998 19H20.5C21.05 19 21.5 19.45 21.5 20C21.5 20.55 21.05 21 20.5 21H3.49998C2.94998 21 2.49998 20.55 2.49998 20C2.49998 19.45 2.94998 19 3.49998 19Z" fill="currentColor"/></svg>';

const RuxIconFlightTakeoff = class {
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

export { RuxIconFlightTakeoff as rux_icon_flight_takeoff };
