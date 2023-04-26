import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.28 3.45C16.61 2.78 16.13 2 15.38 2H7.99998C7.44998 2 6.99998 2.45 6.99998 3V3.61L13.13 9.74L16.28 3.45ZM16.12 11.5C16.51 10.83 16.03 10 15.26 10H13.39L15.67 12.28L16.12 11.5ZM4.11998 3.56L18.44 17.88C18.83 18.27 18.83 18.9 18.43 19.29C18.04 19.68 17.41 19.68 17.02 19.29L13.58 15.85L10.93 20.4C10.67 20.84 9.99998 20.66 9.99998 20.15V13H7.99998C7.44998 13 6.99998 12.55 6.99998 12V9.27L2.70998 4.97C2.31998 4.58 2.31998 3.95 2.70998 3.56C3.09998 3.17 3.72998 3.17 4.11998 3.56Z" fill="currentColor"/></svg>';

const RuxIconFlashOff = class {
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

export { RuxIconFlashOff as rux_icon_flash_off };
