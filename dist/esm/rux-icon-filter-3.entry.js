import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 1H21C22.1 1 23 1.9 23 3V17C23 18.1 22.1 19 21 19H7C5.9 19 5 18.1 5 17V3C5 1.9 5.9 1 7 1ZM7 16C7 16.55 7.45 17 8 17H20C20.55 17 21 16.55 21 16V4C21 3.45 20.55 3 20 3H8C7.45 3 7 3.45 7 4V16ZM2 5C1.45 5 1 5.45 1 6V21C1 22.1 1.9 23 3 23H18C18.55 23 19 22.55 19 22C19 21.45 18.55 21 18 21H4C3.45 21 3 20.55 3 20V6C3 5.45 2.55 5 2 5ZM17 11.5V13C17 14.1 16.1 15 15 15H12C11.45 15 11 14.55 11 14C11 13.45 11.45 13 12 13H15V11H14C13.45 11 13 10.55 13 10C13 9.45 13.45 9 14 9H15V7H12C11.45 7 11 6.55 11 6C11 5.45 11.45 5 12 5H15C16.1 5 17 5.9 17 7V8.5C17 9.33 16.33 10 15.5 10C16.33 10 17 10.67 17 11.5Z" fill="currentColor"/></svg>';

const RuxIconFilter3 = class {
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

export { RuxIconFilter3 as rux_icon_filter_3 };
