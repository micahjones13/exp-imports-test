import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.00003 12C4.00003 6.94995 8.17003 2.85995 13.26 2.99995C17.95 3.12995 21.87 7.04995 22 11.74C22.14 16.83 18.05 21 13 21C10.91 21 9.00003 20.29 7.48003 19.09C7.01003 18.73 6.98003 18.0199 7.40003 17.5999C7.76003 17.24 8.32003 17.2099 8.72003 17.5199C9.90003 18.45 11.39 19 13 19C16.9 19 20.05 15.8099 20 11.9C19.95 8.17995 16.82 5.04995 13.1 4.99995C9.18003 4.94995 6.00003 8.09995 6.00003 12H7.79003C8.24003 12 8.46003 12.5399 8.15003 12.8499L5.36003 15.65C5.16003 15.8499 4.85003 15.8499 4.65003 15.65L1.86003 12.8499C1.54003 12.5399 1.76003 12 2.21003 12H4.00003ZM12 8.74995C12 8.33995 12.34 7.99995 12.75 7.99995C13.16 7.99995 13.5 8.33995 13.5 8.73995V12.1399L16.38 13.8499C16.73 14.0599 16.85 14.5199 16.64 14.8799C16.43 15.2299 15.97 15.3499 15.61 15.1399L12.49 13.2899C12.19 13.11 12 12.78 12 12.4299V8.74995Z" fill="currentColor"/></svg>';

const RuxIconHistory = class {
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

export { RuxIconHistory as rux_icon_history };
