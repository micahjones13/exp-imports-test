import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 4H19C20.1 4 21 4.9 21 6V18C21 19.1 20.1 20 19 20H5C3.89 20 3 19.1 3 18V6C3 4.9 3.89 4 5 4ZM9.5 14.25C9.5 14.66 9.84 15 10.25 15C10.66 15 11 14.66 11 14.25V9.75C11 9.34 10.66 9 10.25 9C9.84 9 9.5 9.34 9.5 9.75V11.5H7.5V9.75C7.5 9.34 7.16 9 6.75 9C6.34 9 6 9.34 6 9.75V14.25C6 14.66 6.34 15 6.75 15C7.16 15 7.5 14.66 7.5 14.25V13H9.5V14.25ZM18 14C18 14.55 17.55 15 17 15H16.25V15.75C16.25 16.16 15.91 16.5 15.5 16.5C15.09 16.5 14.75 16.16 14.75 15.75V15H14C13.45 15 13 14.55 13 14V10C13 9.45 13.45 9 14 9H17C17.55 9 18 9.45 18 10V14ZM16.5 13.5H14.5V10.5H16.5V13.5Z" fill="currentColor"/></svg>';

const RuxIconHighQuality = class {
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

export { RuxIconHighQuality as rux_icon_high_quality };
