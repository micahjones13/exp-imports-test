import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM5 12H7C7.55 12 8 12.45 8 13C8 13.55 7.55 14 7 14H5C4.45 14 4 13.55 4 13C4 12.45 4.45 12 5 12ZM5 18H13C13.55 18 14 17.55 14 17C14 16.45 13.55 16 13 16H5C4.45 16 4 16.45 4 17C4 17.55 4.45 18 5 18ZM19 18H17C16.45 18 16 17.55 16 17C16 16.45 16.45 16 17 16H19C19.55 16 20 16.45 20 17C20 17.55 19.55 18 19 18ZM11 14H19C19.55 14 20 13.55 20 13C20 12.45 19.55 12 19 12H11C10.45 12 10 12.45 10 13C10 13.55 10.45 14 11 14Z" fill="currentColor"/></svg>';

const RuxIconSubtitles = class {
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

export { RuxIconSubtitles as rux_icon_subtitles };
