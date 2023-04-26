import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4C3 4.55 3.45 5 4 5H20C20.55 5 21 4.55 21 4C21 3.45 20.55 3 20 3H4C3.45 3 3 3.45 3 4ZM5 9.5C5.83 9.5 6.5 8.83 6.5 8C6.5 7.17 5.83 6.5 5 6.5C4.17 6.5 3.5 7.17 3.5 8C3.5 8.83 4.17 9.5 5 9.5ZM9 9C9.55 9 10 8.55 10 8C10 7.45 9.55 7 9 7C8.45 7 8 7.45 8 8C8 8.55 8.45 9 9 9ZM10 12C10 12.55 9.55 13 9 13C8.45 13 8 12.55 8 12C8 11.45 8.45 11 9 11C9.55 11 10 11.45 10 12ZM6.5 16C6.5 16.83 5.83 17.5 5 17.5C4.17 17.5 3.5 16.83 3.5 16C3.5 15.17 4.17 14.5 5 14.5C5.83 14.5 6.5 15.17 6.5 16ZM21 20C21 20.55 20.55 21 20 21H4C3.45 21 3 20.55 3 20C3 19.45 3.45 19 4 19H20C20.55 19 21 19.45 21 20ZM6.5 12C6.5 12.83 5.83 13.5 5 13.5C4.17 13.5 3.5 12.83 3.5 12C3.5 11.17 4.17 10.5 5 10.5C5.83 10.5 6.5 11.17 6.5 12ZM9 17C9.55 17 10 16.55 10 16C10 15.45 9.55 15 9 15C8.45 15 8 15.45 8 16C8 16.55 8.45 17 9 17ZM17.5 16C17.5 16.28 17.28 16.5 17 16.5C16.72 16.5 16.5 16.28 16.5 16C16.5 15.72 16.72 15.5 17 15.5C17.28 15.5 17.5 15.72 17.5 16ZM17.5 8C17.5 8.28 17.28 8.5 17 8.5C16.72 8.5 16.5 8.28 16.5 8C16.5 7.72 16.72 7.5 17 7.5C17.28 7.5 17.5 7.72 17.5 8ZM17 12.5C17.28 12.5 17.5 12.28 17.5 12C17.5 11.72 17.28 11.5 17 11.5C16.72 11.5 16.5 11.72 16.5 12C16.5 12.28 16.72 12.5 17 12.5ZM14 8C14 8.55 13.55 9 13 9C12.45 9 12 8.55 12 8C12 7.45 12.45 7 13 7C13.55 7 14 7.45 14 8ZM13 13C13.55 13 14 12.55 14 12C14 11.45 13.55 11 13 11C12.45 11 12 11.45 12 12C12 12.55 12.45 13 13 13ZM14 16C14 16.55 13.55 17 13 17C12.45 17 12 16.55 12 16C12 15.45 12.45 15 13 15C13.55 15 14 15.45 14 16Z" fill="currentColor"/></svg>';

const RuxIconBlurLinear = class {
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

export { RuxIconBlurLinear as rux_icon_blur_linear };
