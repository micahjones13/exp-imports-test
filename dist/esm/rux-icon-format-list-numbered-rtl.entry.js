import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 5H18.5C18.22 5 18 4.78 18 4.5C18 4.22 18.22 4 18.5 4H19.5C19.78 4 20 4.22 20 4.5V7.5C20 7.78 19.78 8 19.5 8C19.22 8 19 7.78 19 7.5V5ZM18 16.5C18 16.22 18.22 16 18.5 16H20.5C20.78 16 21 16.22 21 16.5V19.5C21 19.78 20.78 20 20.5 20H18.5C18.22 20 18 19.78 18 19.5C18 19.22 18.22 19 18.5 19H20V18.5H19.5C19.22 18.5 19 18.28 19 18C19 17.72 19.22 17.5 19.5 17.5H20V17H18.5C18.22 17 18 16.78 18 16.5ZM21 10.72V10.5C21 10.22 20.78 10 20.5 10H18.5C18.22 10 18 10.22 18 10.5C18 10.78 18.22 11 18.5 11H19.8L18.12 12.96C18.04 13.05 18 13.17 18 13.28V13.5C18 13.78 18.22 14 18.5 14H20.5C20.78 14 21 13.78 21 13.5C21 13.22 20.78 13 20.5 13H19.2L20.88 11.04C20.96 10.95 21 10.83 21 10.72ZM3 5H15C15.55 5 16 5.45 16 6C16 6.55 15.55 7 15 7H3C2.45 7 2 6.55 2 6C2 5.45 2.45 5 3 5ZM15 17H3C2.45 17 2 17.45 2 18C2 18.55 2.45 19 3 19H15C15.55 19 16 18.55 16 18C16 17.45 15.55 17 15 17ZM3 11H15C15.55 11 16 11.45 16 12C16 12.55 15.55 13 15 13H3C2.45 13 2 12.55 2 12C2 11.45 2.45 11 3 11Z" fill="currentColor"/></svg>';

const RuxIconFormatListNumberedRtl = class {
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

export { RuxIconFormatListNumberedRtl as rux_icon_format_list_numbered_rtl };
