import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 2C9.89 2 9 2.89 9 4C9 5.11 9.89 6 11 6C12.11 6 13 5.11 13 4C13 2.89 12.11 2 11 2ZM14 10C15.17 10.49 15.99 11.66 16 13V16C16 16.55 15.55 17 15 17H13V20.5C13 21.33 12.33 22 11.5 22C10.67 22 10 21.33 10 20.5V17H9C8.45 17 8 16.55 8 16V10.16C8 8.54 9.22 7.09 10.84 7C12.58 6.92 14 8.29 14 10Z" fill="currentColor"/></svg>';

const RuxIconPregnantWoman = class {
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

export { RuxIconPregnantWoman as rux_icon_pregnant_woman };
