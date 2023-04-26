import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 5H10.88L10 2H4C2.9 2 2 2.9 2 4V17C2 18.1 2.9 19 4 19H11L12 22H20C21.1 22 22 21.1 22 20V7C22 5.9 21.1 5 20 5ZM7.17 14.59C4.92 14.59 3.08 12.76 3.08 10.5C3.08 8.24 4.91 6.41 7.17 6.41C8.21 6.41 9.16 6.78 9.91 7.48L9.98 7.54L8.75 8.72L8.69 8.67C8.4 8.4 7.91 8.08 7.17 8.08C5.86 8.08 4.79 9.17 4.79 10.5C4.79 11.83 5.86 12.92 7.17 12.92C8.54 12.92 9.13 12.05 9.29 11.46H7.08V9.91H11.03L11.04 9.98C11.08 10.19 11.09 10.38 11.09 10.59C11.09 12.94 9.48 14.59 7.17 14.59ZM14.39 14.58C13.94 14.06 13.53 13.48 13.2 12.88L13.85 15.11L14.39 14.58ZM13.97 12.12H12.98L12.67 11.08H16.66C16.66 11.08 16.32 12.39 15.1 13.82C14.58 13.2 14.21 12.59 13.97 12.12ZM20 21C20.55 21 21 20.55 21 20V7C21 6.45 20.55 6 20 6H11.18L12.36 10.04H14.32V9H15.36V10.04H19V11.08H17.73C17.41 12.34 16.71 13.56 15.81 14.59L18.52 17.27L17.79 18L15.11 15.31L14.19 16.23L15 19L13 21H20Z" fill="currentColor"/></svg>';

const RuxIconGTranslate = class {
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

export { RuxIconGTranslate as rux_icon_g_translate };
