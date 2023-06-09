import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.9 3.89 3 5 3ZM9.5 14.25C9.5 14.66 9.84 15 10.25 15C10.66 15 11 14.66 11 14.25V9.75C11 9.34 10.66 9 10.25 9C9.84 9 9.5 9.34 9.5 9.75V11.5H7.5V9.75C7.5 9.34 7.16 9 6.75 9C6.34 9 6 9.34 6 9.75V14.25C6 14.66 6.34 15 6.75 15C7.16 15 7.5 14.66 7.5 14.25V13H9.5V14.25ZM13.5 9H17C17.55 9 18 9.45 18 10V14C18 14.55 17.55 15 17 15H13.5C13.22 15 13 14.78 13 14.5V9.5C13 9.22 13.22 9 13.5 9ZM16.5 13.5H14.5V10.5H16.5V13.5Z" fill="currentColor"/></svg>';

const RuxIconHd = class {
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

export { RuxIconHd as rux_icon_hd };
