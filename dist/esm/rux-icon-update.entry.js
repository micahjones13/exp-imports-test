import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 4.21V9.5C21 9.78 20.78 10 20.5 10H15.21C14.76 10 14.54 9.46 14.86 9.14L16.95 7.05C15.68 5.79 13.93 5 12 5C8.11001 5 4.94001 8.2 5.00001 12.1C5.06001 15.82 8.19001 18.95 11.9 19C15.51 19.05 18.52 16.35 18.95 12.86C19.01 12.37 19.43 12 19.93 12C20.53 12 21 12.52 20.93 13.12C20.38 17.56 16.59 21 12 21C6.69001 21 2.46001 16.4 3.06001 10.98C3.52001 6.79 6.97001 3.42 11.16 3.04C13.98 2.79 16.56 3.83 18.37 5.64L20.15 3.86C20.46 3.54 21 3.76 21 4.21ZM11 12.43V8.75C11 8.34 11.34 8 11.75 8C12.16 8 12.5 8.34 12.51 8.74V12.14L15.38 13.85C15.74 14.06 15.85 14.52 15.64 14.88C15.43 15.23 14.97 15.35 14.61 15.14L11.49 13.29C11.19 13.11 11 12.78 11 12.43Z" fill="currentColor"/></svg>';

const RuxIconUpdate = class {
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

export { RuxIconUpdate as rux_icon_update };
