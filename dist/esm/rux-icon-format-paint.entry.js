import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 4V3C18 2.45 17.55 2 17 2H5C4.45 2 4 2.45 4 3V7C4 7.55 4.45 8 5 8H17C17.55 8 18 7.55 18 7V6H19V10H10C9.45 10 9 10.45 9 11V21C9 21.55 9.45 22 10 22H12C12.55 22 13 21.55 13 21V12H20C20.55 12 21 11.55 21 11V5C21 4.45 20.55 4 20 4H18Z" fill="currentColor"/></svg>';

const RuxIconFormatPaint = class {
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

export { RuxIconFormatPaint as rux_icon_format_paint };
