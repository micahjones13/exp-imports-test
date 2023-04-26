import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 2H2C0.9 2 0 2.9 0 4V16C0 17.1 0.9 18 2 18H7V19C7 19.55 7.45 20 8 20H14C14.55 20 15 19.55 15 19V18H16C16.55 18 17 17.55 17 17C17 16.45 16.55 16 16 16H3C2.45 16 2 15.55 2 15V5C2 4.45 2.45 4 3 4H19C19.55 4 20 4.45 20 5V11C20 11.55 20.45 12 21 12C21.55 12 22 11.55 22 11V4C22 2.9 21.1 2 20 2ZM12 9V7C12 6.45 11.55 6 11 6C10.45 6 10 6.45 10 7V9H8C7.45 9 7 9.45 7 10C7 10.55 7.45 11 8 11H10V13C10 13.55 10.45 14 11 14C11.55 14 12 13.55 12 13V11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H12ZM19.25 20.75L22.29 17.71C22.68 17.32 22.68 16.68 22.29 16.29L19.25 13.25C18.84 12.84 18.16 12.84 17.75 13.25C17.34 13.66 17.34 14.34 17.75 14.75L20 17L17.75 19.25C17.34 19.66 17.34 20.34 17.75 20.75C18.16 21.16 18.84 21.16 19.25 20.75Z" fill="currentColor"/></svg>';

const RuxIconQueuePlayNext = class {
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

export { RuxIconQueuePlayNext as rux_icon_queue_play_next };
