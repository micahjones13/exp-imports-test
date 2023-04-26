import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 4H20C21.11 4 22 4.89 22 6V18C22 19.11 21.11 20 20 20H4C2.89 20 2 19.11 2 18L2.01 6C2.01 4.89 2.89 4 4 4ZM7.71 15C8.14 15 8.5 14.64 8.5 14.21V9.62C8.5 9.28 8.23 9 7.88 9C7.53 9 7.25 9.28 7.25 9.62V12.5L4.99 9.33C4.84 9.12 4.6 9 4.34 9H4.29C3.86 9 3.5 9.36 3.5 9.79V14.38C3.5 14.72 3.79 15 4.13 15C4.47 15 4.75 14.73 4.75 14.38V11.5L7.07 14.67C7.22 14.88 7.46 15 7.71 15ZM13.5 9.64C13.5 9.99 13.22 10.26 12.88 10.26H11V11.38H12.88C13.23 11.38 13.5 11.66 13.5 12V12.01C13.5 12.36 13.22 12.63 12.88 12.63H11V13.74H12.88C13.23 13.74 13.5 14.02 13.5 14.36C13.5 14.71 13.22 14.98 12.88 14.98H10.35C9.88 14.98 9.5 14.6 9.5 14.13V9.83C9.5 9.38 9.88 9 10.35 9H12.88C13.23 9 13.5 9.28 13.5 9.62V9.64ZM19.5 15C20.05 15 20.5 14.55 20.5 14H20.47V9.62C20.47 9.28 20.19 9 19.85 9C19.51 9 19.23 9.27 19.23 9.62V13.5H18.11V10.61C18.11 10.27 17.83 9.99 17.49 9.99C17.15 9.99 16.87 10.26 16.87 10.61V13.51H15.74V9.62C15.74 9.28 15.46 9 15.12 9C14.78 9 14.5 9.28 14.5 9.62V14C14.5 14.55 14.95 15 15.5 15H19.5Z" fill="currentColor"/></svg>';

const RuxIconFiberNew = class {
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

export { RuxIconFiberNew as rux_icon_fiber_new };
