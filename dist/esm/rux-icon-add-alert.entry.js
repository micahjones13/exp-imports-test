import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 17V11C19 7.65 16.64 4.85 13.5 4.17V3C13.5 2.17 12.83 1.5 12 1.5C11.17 1.5 10.5 2.17 10.5 3V4.17C7.35999 4.85 4.99999 7.65 4.99999 11V17L3.70999 18.29C3.07999 18.92 3.51999 20 4.40999 20H19.58C20.47 20 20.92 18.92 20.29 18.29L19 17ZM12 23C13.1 23 13.99 22.11 13.99 21.01H10.01C10.01 22.11 10.9 23 12 23ZM13 13.01H15C15.55 13.01 16 12.56 16 12.01V12C16 11.45 15.55 11 15 11H13V9C13 8.45 12.55 8 12 8C11.45 8 11 8.45 11 9V11H8.99999C8.44999 11 7.99999 11.45 7.99999 12V12.01C7.99999 12.56 8.44999 13.01 8.99999 13.01H11V15.01C11 15.56 11.45 16.01 12 16.01C12.55 16.01 13 15.56 13 15.01V13.01Z" fill="currentColor"/></svg>';

const RuxIconAddAlert = class {
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

export { RuxIconAddAlert as rux_icon_add_alert };
