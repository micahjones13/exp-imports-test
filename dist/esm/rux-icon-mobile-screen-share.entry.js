import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 1H7.00001C5.90001 1 5.01001 1.9 5.01001 3V21C5.01001 22.1 5.90001 23 7.00001 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1 17 1ZM17 19H7.00001V5H17V19ZM12.8 14.97V13.22C10.58 13.22 9.11001 13.9 8.00001 15.4C8.45001 13.26 9.69001 11.13 12.8 10.7V9L15.61 11.62C15.82 11.82 15.82 12.15 15.61 12.35L12.8 14.97Z" fill="currentColor"/></svg>';

const RuxIconMobileScreenShare = class {
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

export { RuxIconMobileScreenShare as rux_icon_mobile_screen_share };
