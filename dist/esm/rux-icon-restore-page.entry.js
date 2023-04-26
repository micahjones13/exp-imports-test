import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.58 2.58L19.41 7.41C19.79 7.79 20 8.3 20 8.83V20C20 21.1 19.1 22 18 22H5.99C4.89 22 4 21.1 4 20L4.01 4C4.01 2.9 4.9 2 6 2H13.17C13.7 2 14.21 2.21 14.58 2.58ZM7.88 15.83C8.81 17.19 10.35 18 12 18C14.76 18 17 15.76 17 13C17 10.24 14.76 8 12 8C10.26 8 8.71 8.89 7.8 10.3L6.5 9V12.5C6.5 12.78 6.72 13 7 13H10.5L8.89 11.39C9.48 10.24 10.67 9.5 12 9.5C13.93 9.5 15.49 11.07 15.49 13C15.49 14.93 13.92 16.5 11.99 16.5C10.84 16.5 9.76 15.93 9.11 14.98C8.88 14.64 8.41 14.55 8.07 14.79C7.73 15.02 7.65 15.49 7.88 15.83Z" fill="currentColor"/></svg>';

const RuxIconRestorePage = class {
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

export { RuxIconRestorePage as rux_icon_restore_page };
