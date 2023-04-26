import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 17V18H23C23.55 18 24 18.45 24 19C24 19.55 23.55 20 23 20H1C0.45 20 0 19.55 0 19C0 18.45 0.45 18 1 18H4V17C2.9 17 2 16.1 2 15V5C2 3.9 2.9 3 4 3H20C21.1 3 22 3.9 22 5L21.99 15C21.99 16.1 21.1 17 20 17ZM19 5H5C4.45 5 4 5.45 4 6V14C4 14.55 4.45 15 5 15H19C19.55 15 20 14.55 20 14V6C20 5.45 19.55 5 19 5Z" fill="currentColor"/></svg>';

const RuxIconLaptopWindows = class {
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

export { RuxIconLaptopWindows as rux_icon_laptop_windows };
