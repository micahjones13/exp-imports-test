import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.77 7.23L19.78 7.22L16.59 4.03C16.3 3.74 15.82 3.74 15.53 4.03C15.24 4.32 15.24 4.8 15.53 5.09L17.11 6.67C16.06 7.07 15.35 8.14 15.53 9.38C15.69 10.48 16.63 11.37 17.73 11.49C18.2 11.54 18.61 11.46 19 11.29V18.5C19 19.05 18.55 19.5 18 19.5C17.45 19.5 17 19.05 17 18.5V14C17 12.9 16.1 12 15 12H14V5C14 3.9 13.1 3 12 3H6C4.9 3 4 3.9 4 5V20C4 20.55 4.45 21 5 21H13C13.55 21 14 20.55 14 20V13.5H15.5V18.36C15.5 19.67 16.44 20.86 17.74 20.99C19.24 21.14 20.5 19.97 20.5 18.5V9C20.5 8.31 20.22 7.68 19.77 7.23ZM12 10H6V6C6 5.45 6.45 5 7 5H11C11.55 5 12 5.45 12 6V10ZM17 9C17 9.55 17.45 10 18 10C18.55 10 19 9.55 19 9C19 8.45 18.55 8 18 8C17.45 8 17 8.45 17 9Z" fill="currentColor"/></svg>';

const RuxIconLocalGasStation = class {
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

export { RuxIconLocalGasStation as rux_icon_local_gas_station };
