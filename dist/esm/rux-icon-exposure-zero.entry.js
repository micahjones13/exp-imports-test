import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.84 15.05C16.04 14.35 16.14 13.5 16.14 12.5H16.15V10.46C16.15 9.45 16.05 8.61 15.85 7.91C15.65 7.21 15.37 6.65 15.01 6.22C14.65 5.79 14.21 5.48 13.7 5.29C13.19 5.1 12.63 5 12 5C11.38 5 10.81 5.1 10.31 5.29C9.79999 5.48 9.35999 5.79 8.99999 6.22C8.63999 6.65 8.35999 7.21 8.15999 7.91C7.95999 8.61 7.85999 9.46 7.85999 10.46V12.5C7.85999 13.5 7.95999 14.35 8.15999 15.05C8.35999 15.74 8.64999 16.31 9.00999 16.75C9.36999 17.19 9.80999 17.5 10.32 17.7C10.83 17.9 11.39 18 12.01 18C12.64 18 13.2 17.9 13.71 17.7C14.22 17.5 14.65 17.19 15.01 16.75C15.36 16.32 15.64 15.75 15.84 15.05ZM13.9 8.52C13.98 8.96 14.03 9.5 14.03 10.14H14.04V12.8C14.04 13.43 14 13.97 13.91 14.42C13.82 14.87 13.69 15.23 13.52 15.51C13.35 15.79 13.14 15.99 12.89 16.12C12.64 16.25 12.35 16.31 12.02 16.31C11.69 16.31 11.4 16.25 11.15 16.12C10.9 15.99 10.68 15.79 10.51 15.51C10.34 15.23 10.2 14.87 10.11 14.42C10.02 13.98 9.96999 13.44 9.96999 12.8V10.13C9.96999 9.49 10.01 8.95 10.1 8.51C10.19 8.07 10.33 7.72 10.5 7.45C10.67 7.18 10.89 6.99 11.14 6.87C11.39 6.75 11.68 6.69 12 6.69C12.32 6.69 12.61 6.75 12.86 6.88C13.11 7 13.33 7.19 13.5 7.46C13.68 7.73 13.81 8.08 13.9 8.52Z" fill="currentColor"/></svg>';

const RuxIconExposureZero = class {
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

export { RuxIconExposureZero as rux_icon_exposure_zero };
