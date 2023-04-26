import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 8.99998 12.66 8.99998 11V5C8.99998 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM17.25 11.71C17.31 11.3 17.66 11 18.08 11C18.6 11 19 11.46 18.93 11.97C18.47 14.94 15.96 17.29 13 17.72V20C13 20.55 12.55 21 12 21C11.45 21 11 20.55 11 20V17.72C8.02998 17.27 5.52998 14.94 5.06998 11.97C4.99998 11.46 5.39998 11 5.91998 11C6.32998 11 6.68998 11.3 6.74998 11.71C7.11998 14.33 9.46998 16.1 12 16.1C14.53 16.1 16.88 14.32 17.25 11.71Z" fill="currentColor"/></svg>';

const RuxIconKeyboardVoice = class {
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

export { RuxIconKeyboardVoice as rux_icon_keyboard_voice };
