import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.70998 4.96996C2.31998 4.57996 2.31998 3.94996 2.70998 3.55996C3.09998 3.16996 3.72998 3.16996 4.11998 3.55996L20.44 19.89C20.83 20.28 20.83 20.91 20.44 21.3C20.05 21.69 19.42 21.69 19.03 21.3L16.55 18.82C16.39 18.92 16.21 19 16 19H3.99998C3.44998 19 2.99998 18.55 2.99998 18V7.99996C2.99998 7.44996 3.44998 6.99996 3.99998 6.99996H4.72998L2.70998 4.96996ZM21 9.90996V15.2C21 16.09 19.92 16.54 19.3 15.91L10.39 6.99996H16C16.55 6.99996 17 7.44996 17 7.99996V11.5L19.29 9.19996C19.92 8.56996 21 9.01996 21 9.90996Z" fill="currentColor"/></svg>';

const RuxIconVideocamOff = class {
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

export { RuxIconVideocamOff as rux_icon_videocam_off };
