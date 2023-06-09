import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 2H17C17.55 2 18 2.45 18 3C18 3.55 17.55 4 17 4H7C6.45 4 6 3.55 6 3C6 2.45 6.45 2 7 2ZM5 8H19C19.55 8 20 7.55 20 7C20 6.45 19.55 6 19 6H5C4.45 6 4 6.45 4 7C4 7.55 4.45 8 5 8ZM22 12V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V12C2 10.9 2.9 10 4 10H20C21.1 10 22 10.9 22 12ZM10 12.73L15.19 15.56C15.54 15.75 15.54 16.25 15.19 16.44L10 19.26V12.73Z" fill="currentColor"/></svg>';

const RuxIconSubscriptions = class {
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

export { RuxIconSubscriptions as rux_icon_subscriptions };
