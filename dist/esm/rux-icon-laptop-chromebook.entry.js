import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23 18H22V5C22 3.9 21.1 3 20 3H4C2.9 3 2 3.9 2 5V18H1C0.45 18 0 18.45 0 19C0 19.55 0.45 20 1 20H23C23.55 20 24 19.55 24 19C24 18.45 23.55 18 23 18ZM13.5 18H10.5C10.22 18 10 17.78 10 17.5C10 17.22 10.22 17 10.5 17H13.5C13.78 17 14 17.22 14 17.5C14 17.78 13.78 18 13.5 18ZM4 15H20V6C20 5.45 19.55 5 19 5H5C4.45 5 4 5.45 4 6V15Z" fill="currentColor"/></svg>';

const RuxIconLaptopChromebook = class {
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

export { RuxIconLaptopChromebook as rux_icon_laptop_chromebook };
