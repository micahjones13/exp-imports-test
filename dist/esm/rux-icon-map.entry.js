import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.65 3.22999L14.65 4.97999C14.88 5.05999 15.12 5.04999 15.34 4.96999L18.27 3.82999C19.58 3.31999 20.99 4.27999 20.99 5.68999V17.54C20.99 18.4 20.44 19.17 19.63 19.44L15.64 20.78C15.22 20.92 14.76 20.92 14.34 20.77L9.34 19.02C9.12 18.94 8.87 18.94 8.65 19.03L5.72 20.17C4.41 20.68 3 19.72 3 18.31V6.45999C3 5.59999 3.55 4.83999 4.36 4.55999L8.35 3.21999C8.77 3.07999 9.23 3.07999 9.65 3.22999ZM9 16.78L15 18.89V7.21999L9 5.10999V16.78Z" fill="currentColor"/></svg>';

const RuxIconMap = class {
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

export { RuxIconMap as rux_icon_map };
