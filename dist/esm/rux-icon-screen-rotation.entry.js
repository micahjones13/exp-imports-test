import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.61 1.4C16.04 0.569999 14.06 -0.0300012 11.81 0.0199988C11.63 0.0199988 11.55 0.239999 11.67 0.369999L15.15 3.85L16.48 2.52C19.57 3.98 21.82 6.89 22.37 10.38C22.43 10.79 22.81 11.07 23.23 11C23.64 10.94 23.92 10.55 23.85 10.14C23.25 6.34 20.89 3.14 17.61 1.4ZM8.11001 1.75C8.69001 1.16 9.64001 1.16 10.23 1.75L22.25 13.77C22.84 14.35 22.84 15.3 22.25 15.89L15.89 22.25C15.31 22.84 14.36 22.84 13.77 22.25L1.75001 10.23C1.16001 9.65 1.16001 8.7 1.75001 8.11L8.11001 1.75ZM3.52001 9.88L14.12 20.48C14.51 20.87 15.15 20.87 15.54 20.49L20.49 15.54C20.88 15.15 20.88 14.52 20.49 14.13L9.88001 3.52C9.49001 3.13 8.86001 3.13 8.47001 3.52L3.52001 8.47C3.13001 8.86 3.13001 9.49 3.52001 9.88ZM7.52001 21.49L8.85001 20.16L12.33 23.65C12.45 23.78 12.37 24 12.19 24C9.94001 24.05 7.96001 23.45 6.39001 22.62C3.11001 20.88 0.750013 17.68 0.150013 13.87C0.0800133 13.46 0.360013 13.07 0.770013 13.01C1.19001 12.94 1.57001 13.22 1.63001 13.63C2.18001 17.12 4.43001 20.03 7.52001 21.49Z" fill="currentColor"/></svg>';

const RuxIconScreenRotation = class {
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

export { RuxIconScreenRotation as rux_icon_screen_rotation };
