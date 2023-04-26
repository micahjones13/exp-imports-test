import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 4H7.56C6.7 4 6 4.7 6 5.56C6 5.84 6.12 6.11 6.32 6.3L12.5 12L6.32 17.7C6.12 17.89 6 18.16 6 18.44C6 19.3 6.7 20 7.56 20H16.5C17.33 20 18 19.33 18 18.5C18 17.67 17.33 17 16.5 17H11L14.59 13.41C15.37 12.63 15.37 11.36 14.59 10.58L11 7H16.5C17.33 7 18 6.33 18 5.5C18 4.67 17.33 4 16.5 4Z" fill="currentColor"/></svg>';

const RuxIconFunctions = class {
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

export { RuxIconFunctions as rux_icon_functions };
