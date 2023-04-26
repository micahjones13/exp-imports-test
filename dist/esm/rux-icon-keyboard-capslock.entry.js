import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.41007L15.89 11.3001C16.28 11.6901 16.91 11.6901 17.3 11.3001C17.69 10.9101 17.69 10.2801 17.3 9.89007L12.71 5.30007C12.32 4.91007 11.69 4.91007 11.3 5.30007L6.7 9.89007C6.31 10.2801 6.31 10.9101 6.7 11.3001C7.09 11.6901 7.72 11.6901 8.11 11.3001L12 7.41007ZM7 17.0001H17C17.55 17.0001 18 16.5501 18 16.0001C18 15.4501 17.55 15.0001 17 15.0001H7C6.45 15.0001 6 15.4501 6 16.0001C6 16.5501 6.45 17.0001 7 17.0001Z" fill="currentColor"/></svg>';

const RuxIconKeyboardCapslock = class {
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

export { RuxIconKeyboardCapslock as rux_icon_keyboard_capslock };
