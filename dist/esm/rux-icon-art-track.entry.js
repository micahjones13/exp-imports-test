import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 9V15C12 16.1 11.1 17 10 17H4C2.9 17 2 16.1 2 15V9C2 7.9 2.9 7 4 7H10C11.1 7 12 7.9 12 9ZM21 7H15C14.45 7 14 7.45 14 8C14 8.55 14.45 9 15 9H21C21.55 9 22 8.55 22 8C22 7.45 21.55 7 21 7ZM21 13H15C14.45 13 14 12.55 14 12C14 11.45 14.45 11 15 11H21C21.55 11 22 11.45 22 12C22 12.55 21.55 13 21 13ZM21 17H15C14.45 17 14 16.55 14 16C14 15.45 14.45 15 15 15H21C21.55 15 22 15.45 22 16C22 16.55 21.55 17 21 17ZM8.64 12.52L9.9 14.2C10.15 14.53 9.91 15 9.5 15H4.52C4.11 15 3.87 14.52 4.13 14.19L4.87 13.24C5.07 12.99 5.45 12.98 5.65 13.23L6.5 14.26L7.84 12.51C8.05 12.25 8.44 12.26 8.64 12.52Z" fill="currentColor"/></svg>';

const RuxIconArtTrack = class {
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

export { RuxIconArtTrack as rux_icon_art_track };
