import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 3V12C7 12.55 7.45 13 8 13H10V20.15C10 20.66 10.67 20.84 10.93 20.4L16.12 11.5C16.51 10.83 16.03 10 15.26 10H13L15.49 3.35C15.74 2.7 15.26 2 14.56 2H8C7.45 2 7 2.45 7 3Z" fill="currentColor"/></svg>';

const RuxIconFlashOn = class {
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

export { RuxIconFlashOn as rux_icon_flash_on };
