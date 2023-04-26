import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 9H4C3.45 9 3 8.55 3 8C3 7.45 3.45 7 4 7H16C16.55 7 17 7.45 17 8C17 8.55 16.55 9 16 9ZM16 13H4C3.45 13 3 12.55 3 12C3 11.45 3.45 11 4 11H16C16.55 11 17 11.45 17 12C17 12.55 16.55 13 16 13ZM4 17H16C16.55 17 17 16.55 17 16C17 15.45 16.55 15 16 15H4C3.45 15 3 15.45 3 16C3 16.55 3.45 17 4 17ZM21 17H19V15H21V17ZM19 7V9H21V7H19ZM21 13H19V11H21V13Z" fill="currentColor"/></svg>';

const RuxIconToc = class {
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

export { RuxIconToc as rux_icon_toc };
