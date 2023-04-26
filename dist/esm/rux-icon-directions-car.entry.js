import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 5C18.16 5 18.72 5.42 18.92 6.01L20.89 11.68C20.96 11.89 21 12.12 21 12.34V19.5C21 20.33 20.32 21 19.5 21C18.67 21 18 20.32 18 19.5V19H6V19.5C6 20.33 5.33 21 4.5 21C3.67 21 3 20.33 3 19.5V12.34C3 12.11 3.04 11.89 3.11 11.68L5.08 6.01C5.29 5.42 5.84 5 6.5 5H17.5ZM5 14.5C5 15.33 5.67 16 6.5 16C7.33 16 8 15.33 8 14.5C8 13.67 7.33 13 6.5 13C5.67 13 5 13.67 5 14.5ZM17.5 16C16.67 16 16 15.33 16 14.5C16 13.67 16.67 13 17.5 13C18.33 13 19 13.67 19 14.5C19 15.33 18.33 16 17.5 16ZM6.27 7.18L5 11H19L17.73 7.18C17.59 6.78 17.21 6.5 16.78 6.5H7.22C6.79 6.5 6.41 6.78 6.27 7.18Z" fill="currentColor"/></svg>';

const RuxIconDirectionsCar = class {
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

export { RuxIconDirectionsCar as rux_icon_directions_car };
