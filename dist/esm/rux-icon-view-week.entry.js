import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 5H3C2.45 5 2 5.45 2 6V18C2 18.55 2.45 19 3 19H6C6.55 19 7 18.55 7 18V6C7 5.45 6.55 5 6 5ZM20 5H17C16.45 5 16 5.45 16 6V18C16 18.55 16.45 19 17 19H20C20.55 19 21 18.55 21 18V6C21 5.45 20.55 5 20 5ZM10 5H13C13.55 5 14 5.45 14 6V18C14 18.55 13.55 19 13 19H10C9.45 19 9 18.55 9 18V6C9 5.45 9.45 5 10 5Z" fill="currentColor"/></svg>';

const RuxIconViewWeek = class {
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

export { RuxIconViewWeek as rux_icon_view_week };
