import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.06 10.24C20.43 10.58 20 11.24 20 12C20 12.76 20.43 13.42 21.06 13.76C21.66 14.09 22 14.77 22 15.46V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 17.71V15.46C2 14.77 2.34 14.09 2.94 13.76C3.57 13.43 4 12.76 4 12C4 11.24 3.58 10.58 2.95 10.23C2.34 9.91 2.01 9.23 2.01 8.54V5.99C2.01 4.89 2.9 4 4 4H20C21.1 4 22 4.9 22 6V8.54C22 9.23 21.66 9.91 21.06 10.24ZM12 14.5L14.5 16.1C14.88 16.35 15.37 16 15.25 15.55L14.49 12.69L16.79 10.81C17.14 10.52 16.95 9.95 16.5 9.92L13.54 9.75L12.46 6.99C12.3 6.57 11.7 6.57 11.53 6.99L10.45 9.74L7.49 9.91C7.03 9.94 6.85 10.51 7.2 10.8L9.5 12.68L8.75 15.56C8.63 16 9.12 16.35 9.5 16.11L12 14.5Z" fill="currentColor"/></svg>';

const RuxIconLocalPlay = class {
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

export { RuxIconLocalPlay as rux_icon_local_play };
