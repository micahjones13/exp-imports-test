import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12ZM13 16V18H11V16H13ZM8.18 8.83C8.73 7.01 10.55 5.74 12.61 6.04C14.35 6.3 15.72 7.77 15.96 9.51C16.1881 11.1235 15.2957 11.9021 14.4344 12.6535C14.2762 12.7916 14.119 12.9288 13.97 13.07C13.85 13.18 13.74 13.29 13.64 13.41C13.635 13.415 13.63 13.4225 13.625 13.43C13.62 13.4375 13.615 13.445 13.61 13.45C13.51 13.57 13.41 13.7 13.33 13.84C13.32 13.855 13.3125 13.87 13.305 13.885C13.2975 13.9 13.29 13.915 13.28 13.93C13.11 14.23 13 14.58 13 15H11C11 14.5 11.08 14.09 11.2 13.75C11.2044 13.7368 11.2068 13.7256 11.2091 13.7155C11.2119 13.7025 11.2144 13.6912 11.22 13.68C11.225 13.665 11.2325 13.6525 11.24 13.64C11.2475 13.6275 11.255 13.615 11.26 13.6C11.33 13.42 11.42 13.25 11.51 13.1C11.515 13.09 11.52 13.0825 11.525 13.075C11.53 13.0675 11.535 13.06 11.54 13.05C11.54 13.045 11.5425 13.0425 11.545 13.04C11.5475 13.0375 11.55 13.035 11.55 13.03C11.8906 12.5171 12.3473 12.1658 12.7745 11.8373C13.3883 11.3652 13.941 10.9401 14 10.15C14.08 9.18 13.38 8.25 12.43 8.05C11.4 7.83 10.45 8.44 10.13 9.33C9.99 9.71 9.66 10 9.25 10H9.05C8.44 10 8 9.41 8.18 8.83Z" fill="currentColor"/></svg>';

const RuxIconHelpOutline = class {
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

export { RuxIconHelpOutline as rux_icon_help_outline };
