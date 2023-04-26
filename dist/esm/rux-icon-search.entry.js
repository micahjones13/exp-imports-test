import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.71 14H15.5L19.74 18.26C20.15 18.67 20.15 19.34 19.74 19.75C19.33 20.16 18.66 20.16 18.25 19.75L14 15.5V14.71L13.73 14.43C12.33 15.63 10.42 16.25 8.39002 15.91C5.61002 15.44 3.39002 13.12 3.05002 10.32C2.53002 6.09 6.09002 2.53 10.32 3.05C13.12 3.39 15.44 5.61 15.91 8.39C16.25 10.42 15.63 12.33 14.43 13.73L14.71 14ZM5.00002 9.5C5.00002 11.99 7.01002 14 9.50002 14C11.99 14 14 11.99 14 9.5C14 7.01 11.99 5 9.50002 5C7.01002 5 5.00002 7.01 5.00002 9.5Z" fill="currentColor"/></svg>';

const RuxIconSearch = class {
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

export { RuxIconSearch as rux_icon_search };
