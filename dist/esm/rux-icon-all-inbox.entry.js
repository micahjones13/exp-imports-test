import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 3H5C3.9 3 3 3.9 3 5V12C3 13.1 3.9 14 5 14H19C20.1 14 21 13.1 21 12V5C21 3.9 20.1 3 19 3ZM19 9H15.86C15.39 9 15.02 9.33 14.89 9.78C14.53 11.04 13.35 12 12 12C10.65 12 9.47 11.04 9.11 9.78C8.98 9.33 8.61 9 8.14 9H5V6C5 5.45 5.45 5 6 5H18C18.55 5 19 5.45 19 6V9ZM20 16H15.87C15.4 16 15.02 16.34 14.89 16.8C14.54 18.07 13.38 19 12 19C10.62 19 9.46 18.07 9.11 16.8C8.98 16.34 8.6 16 8.13 16H4C3.45 16 3 16.45 3 17V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V17C21 16.45 20.55 16 20 16Z" fill="currentColor"/></svg>';

const RuxIconAllInbox = class {
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

export { RuxIconAllInbox as rux_icon_all_inbox };
