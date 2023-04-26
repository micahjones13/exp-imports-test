import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM7.11 16.89C6.68 17.32 5.97 17.28 5.6 16.8C4.53 15.39 4 13.69 4 12C4 10.31 4.53 8.62 5.59 7.2C5.96 6.72 6.67 6.67 7.1 7.1C7.45 7.45 7.49 8 7.2 8.39C6.4 9.46 6 10.73 6 12C6 13.27 6.4 14.53 7.2 15.6C7.5 15.99 7.46 16.54 7.11 16.89ZM8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8C9.79 8 8 9.79 8 12ZM16.9 16.9C16.55 16.55 16.51 16 16.81 15.61C17.6 14.54 18 13.27 18 12C18 10.73 17.6 9.47 16.8 8.4C16.5 8.01 16.54 7.45 16.89 7.1C17.32 6.67 18.03 6.71 18.4 7.19C19.47 8.6 20 10.29 20 11.99C20 13.68 19.47 15.37 18.41 16.79C18.04 17.28 17.33 17.33 16.9 16.9ZM10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12Z" fill="currentColor"/></svg>';

const RuxIconSurroundSound = class {
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

export { RuxIconSurroundSound as rux_icon_surround_sound };
