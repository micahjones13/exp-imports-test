import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 7H19C20.1 7 21 7.9 21 9V15C21 16.1 20.1 17 19 17H5C3.9 17 3 16.1 3 15V9C3 7.9 3.9 7 5 7ZM6 15H18C18.55 15 19 14.55 19 14V10C19 9.45 18.55 9 18 9H6C5.45 9 5 9.45 5 10V14C5 14.55 5.45 15 6 15Z" fill="currentColor"/></svg>';

const RuxIconCrop75 = class {
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

export { RuxIconCrop75 as rux_icon_crop_7_5 };
