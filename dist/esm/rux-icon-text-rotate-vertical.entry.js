import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.14003 17.85L6.35003 19.64C6.16003 19.84 5.84003 19.84 5.65003 19.64L3.86003 17.85C3.54003 17.54 3.76003 17 4.21003 17H5.00003V5C5.00003 4.44 5.45003 4 6.00003 4C6.55003 4 7.00003 4.45 7.00003 5V17H7.79003C8.24003 17 8.46003 17.54 8.14003 17.85ZM15 5C14.54 5 14.13 5.27 13.95 5.69L10.07 14.66C9.80003 15.29 10.27 16 10.96 16C11.35 16 11.7 15.76 11.85 15.4L12.51 13.8H17.51L18.17 15.4C18.32 15.76 18.67 16 19.06 16C19.75 16 20.21 15.29 19.94 14.66L16.06 5.69C15.87 5.27 15.46 5 15 5ZM13.13 12L15 6.98L16.87 12H13.13Z" fill="currentColor"/></svg>';

const RuxIconTextRotateVertical = class {
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

export { RuxIconTextRotateVertical as rux_icon_text_rotate_vertical };
