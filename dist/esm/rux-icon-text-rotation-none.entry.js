import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 11.8L15.16 13.4C15.31 13.76 15.66 14 16.05 14C16.74 14 17.2 13.29 16.93 12.66L13.05 3.69C12.87 3.27 12.46 3 12 3C11.54 3 11.13 3.27 10.95 3.69L7.07 12.66C6.8 13.29 7.27 14 7.96 14C8.35 14 8.7 13.76 8.85 13.4L9.5 11.8H14.5ZM20.65 17.65L18.86 15.86C18.54 15.54 18 15.76 18 16.21V17H6C5.45 17 5 17.45 5 18C5 18.55 5.45 19 6 19H18V19.79C18 20.24 18.54 20.46 18.85 20.14L20.64 18.35C20.84 18.16 20.84 17.84 20.65 17.65ZM13.87 10L12 4.98L10.13 10H13.87Z" fill="currentColor"/></svg>';

const RuxIconTextRotationNone = class {
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

export { RuxIconTextRotationNone as rux_icon_text_rotation_none };
