import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.99998 1H14C14.55 1 15 1.45 15 2C15 2.55 14.55 3 14 3H9.99998C9.44998 3 8.99998 2.55 8.99998 2C8.99998 1.45 9.44998 1 9.99998 1ZM13 13C13 13.55 12.55 14 12 14C11.45 14 11 13.55 11 13V9C11 8.45 11.45 8 12 8C12.55 8 13 8.45 13 9V13ZM19.03 7.39L19.78 6.64C20.16 6.26 20.17 5.63 19.78 5.24L19.77 5.23C19.38 4.84 18.76 4.85 18.37 5.23L17.62 5.98C16.07 4.74 14.12 4 12 4C7.19998 4 3.11998 7.96 2.99998 12.76C2.86998 17.84 6.93998 22 12 22C16.98 22 21 17.97 21 13C21 10.88 20.26 8.93 19.03 7.39ZM4.99998 13C4.99998 16.87 8.12998 20 12 20C15.87 20 19 16.87 19 13C19 9.13 15.87 6 12 6C8.12998 6 4.99998 9.13 4.99998 13Z" fill="currentColor"/></svg>';

const RuxIconTimer = class {
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

export { RuxIconTimer as rux_icon_timer };
