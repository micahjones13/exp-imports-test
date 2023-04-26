import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 6C2.5 5.17 3.17 4.5 4 4.5C4.83 4.5 5.5 5.17 5.5 6C5.5 6.83 4.83 7.5 4 7.5C3.17 7.5 2.5 6.83 2.5 6ZM2.5 12C2.5 11.17 3.17 10.5 4 10.5C4.83 10.5 5.5 11.17 5.5 12C5.5 12.83 4.83 13.5 4 13.5C3.17 13.5 2.5 12.83 2.5 12ZM4 16.5C3.17 16.5 2.5 17.18 2.5 18C2.5 18.82 3.18 19.5 4 19.5C4.82 19.5 5.5 18.82 5.5 18C5.5 17.18 4.83 16.5 4 16.5ZM20 19H8C7.45 19 7 18.55 7 18C7 17.45 7.45 17 8 17H20C20.55 17 21 17.45 21 18C21 18.55 20.55 19 20 19ZM8 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H8C7.45 11 7 11.45 7 12C7 12.55 7.45 13 8 13ZM8 7C7.45 7 7 6.55 7 6C7 5.45 7.45 5 8 5H20C20.55 5 21 5.45 21 6C21 6.55 20.55 7 20 7H8Z" fill="currentColor"/></svg>';

const RuxIconFormatListBulleted = class {
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

export { RuxIconFormatListBulleted as rux_icon_format_list_bulleted };
