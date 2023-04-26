import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.99 8C11.99 9.66 10.66 11 9 11C7.34 11 6 9.66 6 8C6 6.34 7.34 5 9 5C10.66 5 11.99 6.34 11.99 8ZM18.99 9.5C18.99 10.88 17.88 12 16.5 12C15.12 12 14 10.88 14 9.5C14 8.12 15.12 7 16.5 7C17.88 7 18.99 8.12 18.99 9.5ZM16.5 14C14.67 14 11 14.92 11 16.75V18C11 18.55 11.45 19 12 19H21C21.55 19 22 18.55 22 18V16.75C22 14.92 18.33 14 16.5 14ZM2 16.5C2 14.17 6.67 13 9 13C9.66 13 10.5 13.1 11.37 13.28C9.33 14.41 9 15.9 9 16.75V19H3C2.45 19 2 18.55 2 18V16.5Z" fill="currentColor"/></svg>';

const RuxIconSupervisorAccount = class {
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

export { RuxIconSupervisorAccount as rux_icon_supervisor_account };
