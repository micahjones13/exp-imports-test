import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 3H13V5H15V3ZM23 11H21V13H23V11ZM23 15H21V17H23V15ZM23 19H21V21C22 21 23 20 23 19ZM21 7H23V9H21V7ZM21 5V3C22 3 23 4 23 5H21ZM1 7H3V9H1V7ZM19 3H17V5H19V3ZM17 19H19V21H17V19ZM1 5C1 4 2 3 3 3V5H1ZM9 3H11V5H9V3ZM7 3H5V5H7V3ZM1 11V19C1 20.1 1.9 21 3 21H15V13C15 11.9 14.1 11 13 11H1ZM5.12 16.28L3.63 18.19C3.37 18.52 3.61 19 4.02 19.01H12C12.41 19.01 12.65 18.54 12.4 18.21L10.18 15.25C9.99 14.98 9.59 14.98 9.39 15.24L7.29 17.94L5.9 16.27C5.69 16.02 5.32 16.03 5.12 16.28Z" fill="currentColor"/></svg>';

const RuxIconPhotoSizeSelectLarge = class {
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

export { RuxIconPhotoSizeSelectLarge as rux_icon_photo_size_select_large };
