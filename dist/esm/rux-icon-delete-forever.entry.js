import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.79 3.29L15.5 4H18C18.55 4 19 4.45 19 5C19 5.55 18.55 6 18 6H6C5.45 6 5 5.55 5 5C5 4.45 5.45 4 6 4H8.5L9.21 3.29C9.39 3.11 9.65 3 9.91 3H14.09C14.35 3 14.61 3.11 14.79 3.29ZM6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V9C18 7.9 17.1 7 16 7H8C6.9 7 6 7.9 6 9V19ZM9.17 11.17C9.56 10.78 10.19 10.78 10.58 11.17L12 12.59L13.42 11.17C13.81 10.78 14.44 10.78 14.83 11.17C15.22 11.56 15.22 12.19 14.83 12.58L13.41 14L14.83 15.42C15.22 15.81 15.22 16.44 14.83 16.83C14.44 17.22 13.81 17.22 13.42 16.83L12 15.41L10.58 16.83C10.19 17.22 9.56 17.22 9.17 16.83C8.78 16.44 8.78 15.81 9.17 15.42L10.59 14L9.17 12.58C8.78 12.2 8.78 11.56 9.17 11.17Z" fill="currentColor"/></svg>';

const RuxIconDeleteForever = class {
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

export { RuxIconDeleteForever as rux_icon_delete_forever };
