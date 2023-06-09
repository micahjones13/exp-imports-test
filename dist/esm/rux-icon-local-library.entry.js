import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 5C15 6.66 13.66 8 12 8C10.34 8 9 6.66 9 5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5ZM5.32 8.2C7.88 8.66 10.18 9.85 12 11.55C13.82 9.85 16.12 8.66 18.68 8.2C19.89 7.99 21 8.95 21 10.18V17.1C21 18.06 20.23 18.99 19.29 19.12C16.77 19.44 14.48 20.49 12.61 22.02C12.26 22.3 11.69 22.27 11.34 21.98C9.48 20.46 7.21 19.43 4.71 19.11C3.72 18.98 3 18.1 3 16.42V10.18C3 8.95 4.11 7.99 5.32 8.2Z" fill="currentColor"/></svg>';

const RuxIconLocalLibrary = class {
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

export { RuxIconLocalLibrary as rux_icon_local_library };
