import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.37 7H17.63C20.04 7 22 9.24 22 12C22 14.76 20.04 17 17.63 17H6.37C3.96 17 2 14.76 2 12C2 9.24 3.96 7 6.37 7ZM7.6 14.11L11.11 10.6C11.3 10.4 11.33 10.09 11.13 9.89C10.93 9.69 10.62 9.69 10.42 9.89L7.26 13.05L5.75 11.54C5.55 11.34 5.24 11.34 5.04 11.54C4.84 11.74 4.84 12.05 5.04 12.25L6.9 14.11C6.99 14.21 7.13 14.26 7.25 14.26C7.37 14.26 7.5 14.21 7.6 14.11Z" fill="currentColor"/></svg>';

const RuxIconEditAttributes = class {
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

export { RuxIconEditAttributes as rux_icon_edit_attributes };
