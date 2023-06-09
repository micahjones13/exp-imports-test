import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 4H12C13.66 4 15 5.34 15 7V8H13V6.5C13 6.22 12.78 6 12.5 6H4.5C4.22 6 4 6.22 4 6.5V12.5C4 12.78 4.22 13 4.5 13H9V18H7L5.23 19.77C4.95 20.05 4.51 20.05 4.23 19.77C3.95 19.49 3.95 19.05 4.23 18.77L5 18C3.34 18 2 16.66 2 15V7C2 5.34 3.34 4 5 4ZM6 15C6 14.45 5.55 14 5 14C4.45 14 4 14.45 4 15C4 15.55 4.45 16 5 16C5.55 16 6 15.55 6 15ZM20.57 9.66C20.43 9.26 20.05 9 19.6 9H12.41C11.95 9 11.58 9.26 11.43 9.66L10.01 13.77V19.01C10.01 19.56 10.46 20 11.01 20C11.56 20 12.01 19.55 12.01 19V18H20.01V19C20.01 19.55 20.46 20 21.01 20C21.56 20 22 19.56 22.01 19.01L22 13.77L20.57 9.66ZM19.25 10H12.77C12.55 10 12.36 10.14 12.31 10.34L11.62 12.34C11.51 12.66 11.75 13 12.09 13H19.94C20.28 13 20.52 12.66 20.41 12.34L19.72 10.34C19.65 10.14 19.46 10 19.25 10ZM12 16C11.45 16 11 15.55 11 15C11 14.45 11.45 14 12 14C12.55 14 13 14.45 13 15C13 15.55 12.55 16 12 16ZM19 15C19 15.55 19.45 16 20 16C20.55 16 21 15.55 21 15C21 14.45 20.55 14 20 14C19.45 14 19 14.45 19 15Z" fill="currentColor"/></svg>';

const RuxIconCommute = class {
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

export { RuxIconCommute as rux_icon_commute };
