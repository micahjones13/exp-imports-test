import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 1H19C20.1 1 21 1.9 21 3V15.93C21 16.62 20.65 17.23 20.12 17.59L12.56 22.63C12.22 22.85 11.79 22.85 11.45 22.63L3.88 17.59C3.35 17.23 3 16.62 3 15.93L3.01 3C3.01 1.9 3.9 1 5 1ZM10.71 15.29L18.3 7.7C18.69 7.31 18.68 6.68 18.29 6.29C17.9 5.9 17.27 5.9 16.88 6.29L10 13.17L7.12 10.29C6.73 9.9 6.1 9.9 5.71 10.29C5.32 10.68 5.32 11.31 5.71 11.7L9.3 15.29C9.69 15.68 10.32 15.68 10.71 15.29Z" fill="currentColor"/></svg>';

const RuxIconBeenhere = class {
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

export { RuxIconBeenhere as rux_icon_beenhere };
