import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.83 5H20C21.1 5 22 5.9 21.99 7V19C21.99 20.1 21.09 21 19.99 21H12.99V18.91C15.44 18.5 17.4 16.59 17.88 14.16C18 13.55 17.5 13 16.89 13C16.41 13 16.01 13.35 15.91 13.83C15.53 15.64 13.93 17 12 17C10.07 17 8.47 15.64 8.08 13.83C7.98 13.35 7.59 13 7.1 13C6.49 13 5.99 13.55 6.11 14.16C6.59 16.59 8.55 18.49 11 18.91V21H4C2.9 21 2 20.1 2 19V7C2 5.9 2.9 5 4 5H7.17L8.4 3.65C8.78 3.24 9.32 3 9.88 3H14.12C14.68 3 15.22 3.24 15.59 3.65L16.83 5ZM12 15C13.1 15 14 14.1 14 13V9C14 7.9 13.1 7 12 7C10.9 7 10 7.9 10 9V13C10 14.1 10.9 15 12 15Z" fill="currentColor"/></svg>';

const RuxIconPermCameraMic = class {
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

export { RuxIconPermCameraMic as rux_icon_perm_camera_mic };
