import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 14C13.66 14 15 12.66 15 11V5C15 3.34 13.66 2 12 2C10.34 2 8.99999 3.34 8.99999 5V11C8.99999 12.66 10.34 14 12 14ZM11 5C11 4.45 11.45 4 12 4C12.55 4 13 4.45 13 5V11C13 11.55 12.55 12 12 12C11.45 12 11 11.55 11 11V5ZM16.93 11.85C17.01 11.36 17.42 11 17.91 11C18.52 11 19.01 11.54 18.91 12.14C18.42 15.14 16.02 17.49 13 17.92V20C13 20.55 12.55 21 12 21C11.45 21 11 20.55 11 20V17.92C7.97999 17.49 5.57999 15.14 5.08999 12.14C4.99999 11.54 5.47999 11 6.08999 11C6.57999 11 6.98999 11.36 7.06999 11.85C7.47999 14.2 9.52999 16 12 16C14.47 16 16.52 14.2 16.93 11.85Z" fill="currentColor"/></svg>';

const RuxIconMicNone = class {
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

export { RuxIconMicNone as rux_icon_mic_none };
