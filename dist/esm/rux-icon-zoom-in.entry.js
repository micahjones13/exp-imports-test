import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 14H14.71L14.43 13.73C15.63 12.33 16.25 10.42 15.91 8.39C15.44 5.61 13.12 3.39 10.32 3.05C6.09002 2.53 2.54002 6.09 3.05002 10.32C3.39002 13.12 5.61002 15.44 8.39002 15.91C10.42 16.25 12.33 15.63 13.73 14.43L14 14.71V15.5L18.26 19.75C18.67 20.16 19.33 20.16 19.74 19.75L19.75 19.74C20.16 19.33 20.16 18.67 19.75 18.26L15.5 14ZM9.50002 14C7.01002 14 5.00002 11.99 5.00002 9.5C5.00002 7.01 7.01002 5 9.50002 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.50002 14ZM9.00002 7.5C9.00002 7.22 9.22002 7 9.50002 7C9.78002 7 10 7.22 10 7.5V9H11.5C11.78 9 12 9.22 12 9.5C12 9.78 11.78 10 11.5 10H10V11.5C10 11.78 9.78002 12 9.50002 12C9.22002 12 9.00002 11.78 9.00002 11.5V10H7.50002C7.22002 10 7.00002 9.78 7.00002 9.5C7.00002 9.22 7.22002 9 7.50002 9H9.00002V7.5Z" fill="currentColor"/></svg>';

const RuxIconZoomIn = class {
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

export { RuxIconZoomIn as rux_icon_zoom_in };
