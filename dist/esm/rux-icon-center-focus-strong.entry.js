import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 5C5.45 5 5 5.45 5 6V8C5 8.55 4.55 9 4 9C3.45 9 3 8.55 3 8V5C3 3.9 3.9 3 5 3H8C8.55 3 9 3.45 9 4C9 4.55 8.55 5 8 5H6ZM12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8ZM4 15C3.45 15 3 15.45 3 16V19C3 20.1 3.9 21 5 21H8C8.55 21 9 20.55 9 20C9 19.45 8.55 19 8 19H6C5.45 19 5 18.55 5 18V16C5 15.45 4.55 15 4 15ZM19 3H16C15.45 3 15 3.45 15 4C15 4.55 15.45 5 16 5H18C18.55 5 19 5.45 19 6V8C19 8.55 19.45 9 20 9C20.55 9 21 8.55 21 8V5C21 3.9 20.1 3 19 3ZM18 19C18.55 19 19 18.55 19 18V16C19 15.45 19.45 15 20 15C20.55 15 21 15.45 21 16V19C21 20.1 20.1 21 19 21H16C15.45 21 15 20.55 15 20C15 19.45 15.45 19 16 19H18Z" fill="currentColor"/></svg>';

const RuxIconCenterFocusStrong = class {
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

export { RuxIconCenterFocusStrong as rux_icon_center_focus_strong };
