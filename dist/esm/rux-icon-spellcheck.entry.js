import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.12 16C13.81 16 14.27 15.31 14.02 14.68L9.76998 3.87C9.55998 3.34 9.05998 3 8.49998 3C7.93998 3 7.43998 3.34 7.22998 3.87L2.97998 14.68C2.72998 15.31 3.19998 16 3.87998 16C4.27998 16 4.63998 15.75 4.78998 15.37L5.66998 13H11.31L12.21 15.38C12.36 15.75 12.72 16 13.12 16ZM6.42998 11L8.49998 5.48L10.57 11H6.42998ZM13.5 19.68L20.89 12.29C21.27 11.91 21.91 11.91 22.29 12.3C22.68 12.69 22.68 13.32 22.29 13.71L14.21 21.8C13.82 22.19 13.19 22.19 12.8 21.8L9.11998 18.12C8.72998 17.73 8.72998 17.1 9.11998 16.71C9.50998 16.32 10.14 16.32 10.53 16.71L13.5 19.68Z" fill="currentColor"/></svg>';

const RuxIconSpellcheck = class {
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

export { RuxIconSpellcheck as rux_icon_spellcheck };
