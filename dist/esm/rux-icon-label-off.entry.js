import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.58998 5.59001L2.71998 4.72001C2.32998 4.33001 2.32998 3.68001 2.73998 3.30001C3.12998 2.92001 3.75998 2.93001 4.13998 3.31001L19.7 18.88C20.09 19.27 20.09 19.9 19.7 20.29C19.31 20.68 18.68 20.68 18.29 20.29L17 19H4.99998C3.89998 19 2.99998 18.1 2.99998 17V7.00001C2.99998 6.45001 3.22998 5.95001 3.58998 5.59001ZM21.59 11.42C21.84 11.77 21.84 12.23 21.59 12.58L19.36 15.73L8.65998 5.00001H16C16.67 5.00001 17.27 5.33001 17.63 5.84001L21.59 11.42Z" fill="currentColor"/></svg>';

const RuxIconLabelOff = class {
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

export { RuxIconLabelOff as rux_icon_label_off };
