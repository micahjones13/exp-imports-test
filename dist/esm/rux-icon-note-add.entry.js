import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.59 2.59C14.21 2.21 13.7 2 13.17 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8.83C20 8.3 19.79 7.79 19.41 7.42L14.59 2.59ZM16 15C16 15.55 15.55 16 15 16H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V16H9C8.45 16 8 15.55 8 15C8 14.45 8.45 14 9 14H11V12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12V14H15C15.55 14 16 14.45 16 15ZM13 3.5V8C13 8.55 13.45 9 14 9H18.5L13 3.5Z" fill="currentColor"/></svg>';

const RuxIconNoteAdd = class {
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

export { RuxIconNoteAdd as rux_icon_note_add };
