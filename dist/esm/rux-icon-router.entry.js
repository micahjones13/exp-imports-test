import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.17 5.59C11.95 5.76 11.64 5.74 11.45 5.55L11.4 5.5C11.17 5.27 11.19 4.91 11.43 4.7C12.76 3.57 14.38 3 16 3C17.62 3 19.24 3.57 20.57 4.7C20.81 4.91 20.82 5.28 20.6 5.5L20.56 5.55C20.36 5.74 20.05 5.76 19.84 5.59C18.7 4.69 17.35 4.2 16 4.2C14.65 4.2 13.3 4.69 12.17 5.59ZM13.11 7.11C12.89 6.89 12.9 6.51 13.15 6.31C13.98 5.66 14.99 5.3 16 5.3C17.01 5.3 18.02 5.66 18.85 6.3C19.1 6.5 19.12 6.87 18.89 7.1L18.85 7.14C18.66 7.34 18.35 7.35 18.13 7.18C17.5 6.71 16.75 6.5 16 6.5C15.25 6.5 14.5 6.71 13.87 7.19C13.65 7.35 13.35 7.35 13.15 7.15L13.11 7.11ZM19 13H17V10C17 9.45 16.55 9 16 9C15.45 9 15 9.45 15 10V13H5C3.9 13 3 13.9 3 15V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V15C21 13.9 20.1 13 19 13ZM6 18H8V16H6V18ZM11.5 18H9.5V16H11.5V18ZM13 18H15V16H13V18Z" fill="currentColor"/></svg>';

const RuxIconRouter = class {
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

export { RuxIconRouter as rux_icon_router };
