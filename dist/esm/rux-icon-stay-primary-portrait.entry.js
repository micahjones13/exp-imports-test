import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.00001 1L17 1.01C18.1 1.01 19 1.9 19 3V21C19 22.1 18.1 23 17 23H7.00001C5.90001 23 5.01001 22.1 5.01001 21V3C5.01001 1.9 5.90001 1 7.00001 1ZM7.00001 19H17V5H7.00001V19Z" fill="currentColor"/></svg>';

const RuxIconStayPrimaryPortrait = class {
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

export { RuxIconStayPrimaryPortrait as rux_icon_stay_primary_portrait };
