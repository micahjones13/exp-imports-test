import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.9C10.29 2.9 8.89998 4.29 8.89998 6V6.46L7.17998 4.74C7.73998 2.59 9.67998 1 12 1C14.76 1 17 3.24 17 6V8H18C19.1 8 20 8.9 20 10V17.56L10.44 8H15.1V6C15.1 4.29 13.71 2.9 12 2.9ZM3.70998 5.51C4.09998 5.12 4.72998 5.12 5.11998 5.51L20.48 20.88C20.87 21.27 20.87 21.9 20.48 22.29C20.09 22.68 19.46 22.68 19.07 22.29L18.78 22H5.99998C4.89998 22 3.99998 21.1 3.99998 20V10C3.99998 9.25 4.41998 8.6 5.03998 8.25L3.70998 6.92C3.31998 6.53 3.31998 5.9 3.70998 5.51Z" fill="currentColor"/></svg>';

const RuxIconNoEncryption = class {
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

export { RuxIconNoEncryption as rux_icon_no_encryption };
