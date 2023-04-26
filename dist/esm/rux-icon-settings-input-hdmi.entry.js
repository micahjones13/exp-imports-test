import { r as registerInstance, h } from './index-a1205123.js';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 2C17.1 2 18 2.9 18 4V7C18.55 7 19 7.45 19 8V12.7C19 12.89 18.94 13.09 18.83 13.25L16 19V21C16 21.55 15.55 22 15 22H9C8.45 22 8 21.55 8 21V19L5.17 13.25C5.06 13.09 5 12.9 5 12.7V8C5 7.45 5.45 7 6 7V4C6 2.9 6.9 2 8 2H16ZM14 7H16V4H8V7H10V5.5C10 5.22 10.22 5 10.5 5C10.78 5 11 5.22 11 5.5V7H13V5.5C13 5.22 13.22 5 13.5 5C13.78 5 14 5.22 14 5.5V7Z" fill="currentColor"/></svg>';

const RuxIconSettingsInputHdmi = class {
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

export { RuxIconSettingsInputHdmi as rux_icon_settings_input_hdmi };
