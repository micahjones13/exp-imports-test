import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47 6.47 2 12 2C17.53 2 22 6.47 22 12C22 17.53 17.53 22 12 22C6.47 22 2 17.53 2 12ZM14.89 16.3C15.28 16.69 15.91 16.69 16.3 16.3C16.68 15.91 16.68 15.27 16.3 14.89L13.41 12L16.3 9.11C16.69 8.72 16.69 8.09 16.3 7.7C15.91 7.31 15.28 7.31 14.89 7.7L12 10.59L9.11 7.7C8.72 7.31 8.09 7.31 7.7 7.7C7.31 8.09 7.31 8.72 7.7 9.11L10.59 12L7.7 14.89C7.31 15.28 7.31 15.91 7.7 16.3C8.09 16.69 8.72 16.69 9.11 16.3L12 13.41L14.89 16.3Z" fill="currentColor"/></svg>';

const RuxIconCancel = class {
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

export { RuxIconCancel as rux_icon_cancel };
