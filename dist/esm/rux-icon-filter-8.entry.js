import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 1H21C22.1 1 23 1.9 23 3V17C23 18.1 22.1 19 21 19H7C5.9 19 5 18.1 5 17V3C5 1.9 5.9 1 7 1ZM1 6C1 5.45 1.45 5 2 5C2.55 5 3 5.45 3 6V20C3 20.55 3.45 21 4 21H18C18.55 21 19 21.45 19 22C19 22.55 18.55 23 18 23H3C1.9 23 1 22.1 1 21V6ZM20 17H8C7.45 17 7 16.55 7 16V4C7 3.45 7.45 3 8 3H20C20.55 3 21 3.45 21 4V16C21 16.55 20.55 17 20 17ZM15 15H13C11.9 15 11 14.11 11 13V11.5C11 10.67 11.67 10 12.5 10C11.67 10 11 9.33 11 8.5V7C11 5.89 11.9 5 13 5H15C16.1 5 17 5.89 17 7V8.5C17 9.33 16.33 10 15.5 10C16.33 10 17 10.67 17 11.5V13C17 14.11 16.1 15 15 15ZM13 7H15V9H13V7ZM15 11H13V13H15V11Z" fill="currentColor"/></svg>';

const RuxIconFilter8 = class {
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

export { RuxIconFilter8 as rux_icon_filter_8 };
