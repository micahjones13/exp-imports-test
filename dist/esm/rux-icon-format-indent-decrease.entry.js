import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C3.45 5 3 4.55 3 4C3 3.45 3.45 3 4 3H20C20.55 3 21 3.45 21 4C21 4.55 20.55 5 20 5H4ZM6.14 15.14L3.35 12.35C3.16 12.16 3.16 11.84 3.36 11.65L6.15 8.86C6.46 8.54 7 8.76 7 9.21V14.79C7 15.24 6.46 15.46 6.14 15.14ZM20 17H12C11.45 17 11 16.55 11 16C11 15.45 11.45 15 12 15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17ZM20 21C20.55 21 21 20.55 21 20C21 19.45 20.55 19 20 19H4C3.45 19 3 19.45 3 20C3 20.55 3.45 21 4 21H20ZM12 9H20C20.55 9 21 8.55 21 8C21 7.45 20.55 7 20 7H12C11.45 7 11 7.45 11 8C11 8.55 11.45 9 12 9ZM20 13H12C11.45 13 11 12.55 11 12C11 11.45 11.45 11 12 11H20C20.55 11 21 11.45 21 12C21 12.55 20.55 13 20 13Z" fill="currentColor"/></svg>';

const RuxIconFormatIndentDecrease = class {
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

export { RuxIconFormatIndentDecrease as rux_icon_format_indent_decrease };
