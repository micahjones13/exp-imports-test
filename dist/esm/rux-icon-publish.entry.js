import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 6C5.45 6 5 5.55 5 5C5 4.45 5.45 4 6 4H18C18.55 4 19 4.45 19 5C19 5.55 18.55 6 18 6H6ZM9 14H7.41C6.52 14 6.08 12.92 6.71 12.29L11.3 7.7C11.69 7.31 12.32 7.31 12.71 7.7L17.3 12.29C17.93 12.92 17.48 14 16.59 14H15V19C15 19.55 14.55 20 14 20H10C9.45 20 9 19.55 9 19V14Z" fill="currentColor"/></svg>';

const RuxIconPublish = class {
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

export { RuxIconPublish as rux_icon_publish };
