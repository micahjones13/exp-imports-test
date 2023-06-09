import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.79998 12L8.69998 15.9C9.08998 16.29 9.08998 16.91 8.69998 17.3C8.30998 17.69 7.68998 17.69 7.29998 17.3L2.70998 12.7C2.31998 12.31 2.31998 11.68 2.70998 11.29L7.29998 6.7C7.68998 6.31 8.30998 6.31 8.69998 6.7C9.08998 7.09 9.08998 7.71 8.69998 8.1L4.79998 12ZM19.2 12L15.3 15.9C14.91 16.29 14.91 16.91 15.3 17.3C15.69 17.69 16.31 17.69 16.7 17.3L21.29 12.7C21.68 12.31 21.68 11.68 21.29 11.29L16.7 6.7C16.31 6.31 15.69 6.31 15.3 6.7C14.91 7.09 14.91 7.71 15.3 8.1L19.2 12Z" fill="currentColor"/></svg>';

const RuxIconCode = class {
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

export { RuxIconCode as rux_icon_code };
