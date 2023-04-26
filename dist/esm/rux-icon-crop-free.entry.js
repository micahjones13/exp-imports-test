import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 8V5C3 3.9 3.9 3 5 3H8C8.55 3 9 3.45 9 4C9 4.55 8.55 5 8 5H6C5.45 5 5 5.45 5 6V8C5 8.55 4.55 9 4 9C3.45 9 3 8.55 3 8ZM3 16C3 15.45 3.45 15 4 15C4.55 15 5 15.45 5 16V18C5 18.55 5.45 19 6 19H8C8.55 19 9 19.45 9 20C9 20.55 8.55 21 8 21H5C3.9 21 3 20.1 3 19V16ZM19 18C19 18.55 18.55 19 18 19H16C15.45 19 15 19.45 15 20C15 20.55 15.45 21 16 21H19C20.1 21 21 20.1 21 19V16C21 15.45 20.55 15 20 15C19.45 15 19 15.45 19 16V18ZM16 3H19C20.1 3 21 3.9 21 5V8C21 8.55 20.55 9 20 9C19.45 9 19 8.55 19 8V6C19 5.45 18.55 5 18 5H16C15.45 5 15 4.55 15 4C15 3.45 15.45 3 16 3Z" fill="currentColor"/></svg>';

const RuxIconCropFree = class {
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

export { RuxIconCropFree as rux_icon_crop_free };
