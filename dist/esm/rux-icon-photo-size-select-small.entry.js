import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 3H13V5H15V3ZM23 11H21V13H23V11ZM23 15H21V17H23V15ZM21 19H23C23 20 22 21 21 21V19ZM21 7H23V9H21V7ZM21 3V5H23C23 4 22 3 21 3ZM9 15C10.1 15 11 15.9 11 17V21H3C1.9 21 1 20.1 1 19V15H9ZM3 7H1V9H3V7ZM13 19H15V21H13V19ZM19 3H17V5H19V3ZM17 19H19V21H17V19ZM3 3C2 3 1 4 1 5H3V3ZM1 11H3V13H1V11ZM11 3H9V5H11V3ZM5 3H7V5H5V3Z" fill="currentColor"/></svg>';

const RuxIconPhotoSizeSelectSmall = class {
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

export { RuxIconPhotoSizeSelectSmall as rux_icon_photo_size_select_small };
