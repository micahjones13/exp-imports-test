import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 11H5C4.45 11 4 10.55 4 10V6C4 5.45 4.45 5 5 5H8C8.55 5 9 5.45 9 6V10C9 10.55 8.55 11 8 11ZM8 18H5C4.45 18 4 17.55 4 17V13C4 12.45 4.45 12 5 12H8C8.55 12 9 12.45 9 13V17C9 17.55 8.55 18 8 18ZM11 18H14C14.55 18 15 17.55 15 17V13C15 12.45 14.55 12 14 12H11C10.45 12 10 12.45 10 13V17C10 17.55 10.45 18 11 18ZM20 18H17C16.45 18 16 17.55 16 17V13C16 12.45 16.45 12 17 12H20C20.55 12 21 12.45 21 13V17C21 17.55 20.55 18 20 18ZM11 11H14C14.55 11 15 10.55 15 10V6C15 5.45 14.55 5 14 5H11C10.45 5 10 5.45 10 6V10C10 10.55 10.45 11 11 11ZM16 10V6C16 5.45 16.45 5 17 5H20C20.55 5 21 5.45 21 6V10C21 10.55 20.55 11 20 11H17C16.45 11 16 10.55 16 10Z" fill="currentColor"/></svg>';

const RuxIconViewModule = class {
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

export { RuxIconViewModule as rux_icon_view_module };
