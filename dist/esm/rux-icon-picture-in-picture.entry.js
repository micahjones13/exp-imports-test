import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 20.98 3 20.98H21C22.1 20.98 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM18 7H12C11.45 7 11 7.45 11 8V12C11 12.55 11.45 13 12 13H18C18.55 13 19 12.55 19 12V8C19 7.45 18.55 7 18 7ZM4 19.01H20C20.55 19.01 21 18.56 21 18.01V5.98C21 5.43 20.55 4.98 20 4.98H4C3.45 4.98 3 5.43 3 5.98V18.01C3 18.56 3.45 19.01 4 19.01Z" fill="currentColor"/></svg>';

const RuxIconPictureInPicture = class {
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

export { RuxIconPictureInPicture as rux_icon_picture_in_picture };
