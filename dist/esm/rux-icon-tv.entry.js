import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 3H21C22.1 3 23 3.9 23 5L22.99 17C22.99 18.1 22.1 19 21 19H16V20C16 20.55 15.55 21 15 21H9C8.45 21 8 20.55 8 20V19H3C1.9 19 1 18.1 1 17V5C1 3.9 1.9 3 3 3ZM4 17H20C20.55 17 21 16.55 21 16V6C21 5.45 20.55 5 20 5H4C3.45 5 3 5.45 3 6V16C3 16.55 3.45 17 4 17Z" fill="currentColor"/></svg>';

const RuxIconTv = class {
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

export { RuxIconTv as rux_icon_tv };
