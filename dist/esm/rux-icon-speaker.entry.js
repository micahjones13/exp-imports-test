import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 2H17C18.1 2 19 2.9 19 4V20C19 21.1 18.1 22 17 22L7 21.99C5.9 21.99 5 21.1 5 20V4C5 2.9 5.9 2 7 2ZM14 6C14 4.9 13.1 4 12 4C10.89 4 10 4.9 10 6C10 7.1 10.89 8 12 8C13.1 8 14 7.1 14 6ZM12 20C9.24 20 7 17.76 7 15C7 12.24 9.24 10 12 10C14.76 10 17 12.24 17 15C17 17.76 14.76 20 12 20ZM9 15C9 13.34 10.34 12 12 12C13.66 12 15 13.34 15 15C15 16.66 13.66 18 12 18C10.34 18 9 16.66 9 15Z" fill="currentColor"/></svg>';

const RuxIconSpeaker = class {
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

export { RuxIconSpeaker as rux_icon_speaker };
