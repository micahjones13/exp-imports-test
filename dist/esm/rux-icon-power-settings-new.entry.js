import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 4C11 3.45 11.45 3 12 3C12.55 3 13 3.45 13 4V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V4ZM17.13 7.25C16.76 6.86 16.75 6.25 17.14 5.86C17.54 5.46 18.2 5.47 18.58 5.88C20.08 7.48 21 9.62 21 11.99C21 17.06 16.81 21.15 11.71 20.99C6.82999 20.84 2.85999 16.62 2.99999 11.74C3.06999 9.47 3.97999 7.42 5.42999 5.88C5.80999 5.47 6.45999 5.46 6.85999 5.86C7.23999 6.24 7.23999 6.85 6.86999 7.24C5.70999 8.49 4.99999 10.16 4.99999 12C4.99999 15.9 8.17999 19.05 12.09 18.99C15.92 18.95 19.09 15.65 19 11.82C18.96 10.05 18.26 8.45 17.13 7.25Z" fill="currentColor"/></svg>';

const RuxIconPowerSettingsNew = class {
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

export { RuxIconPowerSettingsNew as rux_icon_power_settings_new };
