import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.79 5H13V2C13 1.45 12.55 1 12 1C11.45 1 11 1.45 11 2V5H9.21C8.76 5 8.54 5.54 8.85 5.85L11.64 8.64C11.84 8.84 12.15 8.84 12.35 8.64L15.14 5.85C15.46 5.54 15.24 5 14.79 5ZM9.21 19H11V22C11 22.55 11.45 23 12 23C12.55 23 13 22.55 13 22V19H14.79C15.24 19 15.46 18.46 15.14 18.15L12.35 15.36C12.15 15.16 11.84 15.16 11.64 15.36L8.85 18.15C8.54 18.46 8.76 19 9.21 19ZM5 13C4.45 13 4 12.55 4 12C4 11.45 4.45 11 5 11H19C19.55 11 20 11.45 20 12C20 12.55 19.55 13 19 13H5Z" fill="currentColor"/></svg>';

const RuxIconVerticalAlignCenter = class {
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

export { RuxIconVerticalAlignCenter as rux_icon_vertical_align_center };
